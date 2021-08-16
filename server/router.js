const express = require('express');
const controller = require('./controller/index');

const router = express.Router();

router
  .route('/qa/questions')
  .get(controller.getProductQuestions);
//   .post(controller.addQuestions)

// router
//   .route('/qa/questions/:question_id/answers')
//   .get(controller.getQuestionAnswers)
//   .post(controller.addAnswer)

//   router
//   .route('/qa/questions/:question_id/report')
//   .put(controller.reportQuestion)

router
  .put('/qa/answers/:answer_id/helpful', controller.markAnswerHelpful)
  .put('/qa/questions/:question_id/helpful', controller.markQuestionHelpful);

//   router
//   .route('/qa/answers/:answer_id/report')
//   .put(controller.reportAnswer)

module.exports = router;