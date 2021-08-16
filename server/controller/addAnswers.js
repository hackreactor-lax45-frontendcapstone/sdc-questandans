const db = require('../../database/db');

module.exports = (req, res) => {
  console.log(req.body);
  console.log(req.params);

  db('answers').insert({
    question_id: req.params.question_id,
    body: req.body.body,
    date_written: Date.now(),
    answerer_name: req.body.name,
    answer_email: req.body.email,
    reported: false,
    helpful: 0,
  })
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(404).send(err));
};
