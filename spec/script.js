/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '1s',
};

export default function () {
  const max = 1000011;
  const min = Math.ceil(max * 0.9);
  const productId = Math.ceil(Math.random() * (max - min)) + min;
  const questMax = 3518961;
  const questMin = Math.ceil(questMax * 0.9);
  const questionId = Math.ceil(Math.random() * (questMax - questMin)) + questMin;
  const ansMax = 6879306;
  const ansMin = Math.ceil(ansMax * 0.9);
  const answerId = Math.ceil(Math.random() * (ansMax - ansMin)) + ansMin;
  const questionData = {
    body: 'how long will it last',
    name: 'yey',
    email: 'dfsfw@gmail.com',
    product_id: 1,
  };
  const answerData = {
    body: 'how long will it last1',
    name: 'reytoy20',
    email: 'ffdsfsgast@gmail.com',
    photos: ['photo1', 'photo2'],
  };
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  //  get & post request for questions
  http.get(`http://127.0.0.1:3010/api/qa/questions?product_id=${productId}`);
  http.post('http://127.0.0.1:3010/api/qa/questions', JSON.stringify(questionData), params);

  // get & post request for answers
  http.get(`http://127.0.0.1:3010/api/qa/questions/${questionId}/answers`);
  http.post(`http://127.0.0.1:3010/api/qa/questions/${questionId}/answers`, JSON.stringify(answerData), params);

  // put request for answers report
  http.put(`http://127.0.0.1:3010/api/qa/answers/${answerId}/report`);

  // put request for answer upvote
  http.put(`http://127.0.0.1:3010/api/qa/answers/${answerId}/helpful`);

  // put request for question report
  http.put(`http://127.0.0.1:3010/api/qa/questions/${questionId}/report`);

  // put request for question upvote
  http.put(`http://127.0.0.1:3010/api/qa/questions/${questionId}/helpful`);

  sleep(2);
}
