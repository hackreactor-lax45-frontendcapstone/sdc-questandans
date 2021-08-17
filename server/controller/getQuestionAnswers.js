const moment = require('moment');
const db = require('../../database/db');

module.exports = async (req, res) => {
  const count = req.query.count || 5;
  const page = req.query.page || 1;
  const offset = (page - 1) * count;

  const response = {
    question: req.params.question_id,
    page,
    count,
  };

  await db('answers')
    .select('id', 'question_id', 'body', 'date_written', 'answerer_name', 'helpful')
    .where('question_id', req.params.question_id)
    .limit(count)
    .offset(offset)
    .then((answers) => {
      response.results = answers.map((answer) => {
        const answerObj = {
          answer_id: answer.id,
          body: answer.body,
          date: moment(answer.date_written).toISOString(),
          answerer_name: answer.answerer_name,
          helpfulness: answer.helpful,
        };
        return answerObj;
      });
      const answersId = answers.map((a) => a.id);
      return answersId;
    })
    .then(async (answersId) => {
      await db('answers_photos').whereIn('answer_id', answersId).select()
        .then((photos) => {
          photos.forEach((photo) => {
            const url = {
              id: photo.id,
              url: photo.url,
            };
            response.results.forEach((answer) => {
              if (!answer.photos) answer.photos = [];
              if (photo.answer_id === answer.answer_id) {
                answer.photos.push(url);
              }
            });
          });
        });
    })
    .then(() => res.status(200).json(response))
    .catch((err) => res.status(404).send(err));
};
