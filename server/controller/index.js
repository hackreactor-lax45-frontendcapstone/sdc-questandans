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
