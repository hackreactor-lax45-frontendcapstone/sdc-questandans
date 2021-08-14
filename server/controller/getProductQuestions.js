const knex = require('knex');
const config = require('../../database/config');

const db = knex({
  client: 'pg',
  connection: config,
});

module.exports = (req, res) => {
  db.select('*').from('questions').where('product_id', Number(req.query.product_id))
    .then((results) => {
      res.status(200).send(results);
      console.log(results);
    })
    .catch((err) => res.status(404).send(err));
};

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
