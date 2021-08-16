const getProductQuestions = require('./getProductQuestions');
const addAnswers = require('./addAnswers');
const addQuestions = require('./addQuestions');
// const getQuestionsAnswers = require('./getQuestionsAnswers');
const markAnswerHelpful = require('./markAnswerHelpful');
const markQuestionHelpful = require('./markQuestionHelpful');
const reportQuestion = require('./reportQuestion');
const reportAnswer = require('./reportAnswer');

module.exports = {
  getProductQuestions,
  addAnswers,
  addQuestions,
  // getQuestionsAnswers,
  markAnswerHelpful,
  markQuestionHelpful,
  reportAnswer,
  reportQuestion,
};

// server.get('/api/questions/:question_id/answers', (req, res) => {
//   db.getQuestionAnswers((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
