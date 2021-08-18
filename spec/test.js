const axios = require('axios');

const URL = 'http://127.0.0.1:3010';

const questions = `${URL}/qa/questions`;

const answers = `${URL}/qa/questions/:question_id/answers`;

const reportQuestions  = `${URL}/qa/questions/:question_id/report`;

const upvoteQuestions = `${URL}/qa/questions/:question_id/helpful`;

const reportAnswers = `${URL}/qa/answers/:answer_id/report`;

const upvoteAnswers = `${URL}/qa/answers/:answer_id/helpful`;

//how long it is taking for each endpoint method
//check the status code
