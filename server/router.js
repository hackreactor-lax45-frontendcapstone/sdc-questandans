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


router
.put('/qa/questions/:question_id/report', controller.reportQuestion)
.put('/qa/questions/:question_id/helpful', controller.markQuestionHelpful)
.put('/qa/answers/:answer_id/report', controller.reportAnswer)
.put('/qa/answers/:answer_id/helpful', controller.markAnswerHelpful)

module.exports = router;