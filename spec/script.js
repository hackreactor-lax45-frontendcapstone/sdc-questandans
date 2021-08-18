import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const productId = 5;
  const questionId = 1;
  const answerId = 8;
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

  //put request for answers report
  http.put(`http://127.0.0.1:3010/api/qa/answers/${answerId}/report`);

  //put request for answer upvote
  http.put(`http://127.0.0.1:3010/api/qa/answers/${answerId}/helpful`);

  //put request for question report
  http.put(`http://127.0.0.1:3010/api/qa/questions/${questionId}/report`);

  //put request for question upvote
  http.put(`http://127.0.0.1:3010/api/qa/questions/${questionId}/helpful`);

  sleep(1);
}
