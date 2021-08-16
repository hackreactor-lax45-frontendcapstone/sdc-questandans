const db = require('../../database/db');

module.exports = (req, res) => {
  db('questions').where('id', req.params.question_id).update('reported', true)
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(404).send(err));
};
