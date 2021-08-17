const db = require('../../database/db');

module.exports = (req, res) => {
  db('answers').insert({
    question_id: req.params.question_id,
    body: req.body.body,
    date_written: Date.now(),
    answerer_name: req.body.name,
    answer_email: req.body.email,
    reported: false,
    helpful: 0,
  }, ['id'])
    .then((result) => req.body.photos.map((photo) => ({
      answer_id: result[0].id,
      url: photo,
    })))
    .then((photoObj) => {
      db('answers_photos').insert(photoObj)
        .then(() => res.sendStatus(201));
    })
    .catch((err) => res.status(404).send(err));
};
