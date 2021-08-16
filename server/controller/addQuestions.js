const db = require('../../database/db');

module.exports = (req, res) => {
  console.log(req.body);

  db('questions').insert({
    product_id: req.body.product_id,
    body: req.body.body,
    date_written: Date.now(),
    asker_name: req.body.name,
    asker_email: req.body.email,
    reported: false,
    helpful: 0,
  })
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(404).send(err));
};
