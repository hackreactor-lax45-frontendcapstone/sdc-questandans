const db = require('../../database/db');

module.exports = (req, res) => {
  db('answers').where('id', req.params.answer_id).increment('helpful', 1)
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(404).send(err));
};
