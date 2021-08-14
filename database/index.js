const knex = require('knex');
const config = require('./config');

const db = knex({
  client: 'pg',
  connection: config,
});

const getProductQuestions = (id, callback) => {
  db.select('*').from('questions').where('product_id', id)
    .then((results) => callback(null, results))
    .catch((err) => callback(err, null));
};

// addQuestions
// getQuestionAnswers
// addAnswer
// markQuestionHelpful
// reportQuestion

// markAnswerHelpful
// reportAnswer

module.exports.getProductQuestions = getProductQuestions;
// module.exports.addQuestions = addQuestions;
// module.exports.getQuestionAnswers = getQuestionAnswers;
// module.exports.addAnswer = addAnswer;
// module.exports.markQuestionHelpful = markQuestionHelpful;
// module.exports.reportQuestion = reportQuestion;
// module.exports.markAnswerHelpful = markAnswerHelpful;
// module.exports.reportAnswer = reportAnswer;

