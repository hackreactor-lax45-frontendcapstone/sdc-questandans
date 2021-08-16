const db = require('../../database/db');
const moment = require('moment');

function getProductQuestions (req, res) {
  db('questions').where('product_id', Number(req.query.product_id))
    .then((results) => {
      const response = {
        product_id: req.query.product_id,
        results: [],
      };

      results.forEach(async (result) => {
        const question = {
          question_id: result.id,
          question_body: result.body,
          question_date: moment(result.date_written).toISOString(),
          asker_name: result.asker_name,
          // asker_email: result.asker_email,
          question_helpfulness: result.helpful,
          reported: Boolean(result.reported),
        };

        await db('answers').where('question_id', result.id)
          .then((answers) => {
            const answersObj = {};
            answers.forEach(async (answer) => {
              const answerObj = {
                id: answer.id,
                body: answer.body,
                date: moment(answer.date_written).toISOString(),
                answerer_name: answer.answerer_name,
                reported: Boolean(answer.reported),
                helpfulness: answer.helpful,
              };
              await db('answers_photos').where('answer_id', answer.id)
                .then((photos) => {
                  const photosArray = [];
                  photos.forEach(async (photo) => {
                    const photoObj = {
                      id: photo.id,
                      url: photo.url,
                    };
                    photosArray.push(photoObj);
                  });
                  answerObj.photos = photosArray;
                  answersObj[answer.id] = answerObj;
                  question.answers = answersObj;
                  response.results.push(question);
                  console.log('response', response);
                });
            });
          });
      });
      return response;
    })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(404).send(err));
};

module.exports = getProductQuestions;

// server.get('qa/questions', (req, res) => {
//   db.getProductQuestions(Number(req.query.product_id), (err, data) => {
//     const results = [];
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       console.log(data);
//       res.status(200).send(data);
//     }
//   });
// });


// server.post('/api/qa/questions', (req, res) => {
//   db.addQuestions((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

// server.get('/api/questions/:question_id/answers', (req, res) => {
//   db.getQuestionAnswers((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

// server.post('/api/questions/:question_id/answers', (req, res) => {
//   db.addAnswer((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

// server.put('/api/questions/:question_id/helpful', (req, res) => {
//   db.markQuestionHelpful((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

// server.put('/api/questions/:question_id/report', (req, res) => {
//   db.reportQuestion((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

// server.put('/api/answers/:answer_id/helpful', (req, res) => {
//   db.markAnswerHelpful((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

// server.put('/api/answers/:answer_id/report', (req, res) => {
//   db.reportAnswer((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });
