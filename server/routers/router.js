const router = require('express').Router();
const controller = require('../controllers/index');

router
  .route('/questions')
  .get('/', controller.getProductQuestions.get)
  .post('/', controller.addQuestions.get)
  .get('/:question_id/answers', controller.getQuestionAnswers.get)
  .post('/:question_id/answers', controller.addAnswer.add)
  .put('/:question_id/helpful', controller.markQuestionHelpful.mark)
  .put('/:question_id/report', controller.reportQuestion)

router
  .route('/answers')
  .put('/:answer_id/helpful', controller.markAnswerHelpful)
  .put('./:answer_id/report', controller.reportAnswer)

module.exports = router;