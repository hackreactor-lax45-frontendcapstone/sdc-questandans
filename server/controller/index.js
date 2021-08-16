const getProductQuestions = require('./getProductQuestions');
// const addAnswers = require('./addAnswers');
// const addQuestions = require('./addQuestions');
// const getQuestionsAnswers = require('./getQuestionsAnswers');
const markAnswerHelpful = require('./markAnswerHelpful');
const markQuestionHelpful = require('./markQuestionHelpful');
// const reportQuestion = require('./reportQuestion');
// const reportAnswer = require('./reportAnswer');

module.exports = {
  getProductQuestions,
  // addAnswers,
  // addQuestions,
  // getQuestionsAnswers,
  markAnswerHelpful,
  markQuestionHelpful,
  // reportAnswer,
  // reportQuestion,
};



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
