const router = require('express').Router();
const controller = require('../controllers/index');

router
  .route('/questions')
    .get(controller.getProductQuestions)
    .post(controller.addQuestions)
    .get('/:question_id/answers', controller.getQuestionAnswers)
    .post('/:question_id/answers', controller.addAnswer)
    .put('/:question_id/helpful', controller.markQuestionHelpful)
    .put('/:question_id/report', controller.reportQuestion)

 router
  .route('/answers')
    .put('/:answer_id/helpful', controller.markAnswerHelpful)
    .put('./:answer_id/report', controller.reportAnswer)

module.exports = router;