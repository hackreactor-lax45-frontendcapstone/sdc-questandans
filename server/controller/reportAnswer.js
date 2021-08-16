const db = require('../../database/db');

module.exports = (req, res) => {
  db('answers').where('id', req.params.answer_id).update('reported', true)
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(404).send(err));
};
