const getProductQuestions = require('./getProductQuestions');
const addAnswers = require('./addAnswers');
const addQuestions = require('./addQuestions');
const getQuestionAnswers = require('./getQuestionAnswers');
const markAnswerHelpful = require('./markAnswerHelpful');
const markQuestionHelpful = require('./markQuestionHelpful');
const reportQuestion = require('./reportQuestion');
const reportAnswer = require('./reportAnswer');

module.exports = {
  getProductQuestions,
  addAnswers,
  addQuestions,
  getQuestionAnswers,
  markAnswerHelpful,
  markQuestionHelpful,
  reportAnswer,
  reportQuestion,
};
