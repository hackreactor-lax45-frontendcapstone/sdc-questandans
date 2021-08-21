const schema = require('../schema');
const answers = require('./answers');
const answersPhotos = require('./answers_photo');
const questions = require('./questions');
const db = require('../db');

schema()
  .then(() => questions())
  .then(() => db.raw(`SELECT SETVAL('questions_q_id_seq', (SELECT MAX(q_id) + 1 FROM questions))`))
  .then(() => answers())
  .then(() => db.raw(`SELECT SETVAL('answers_a_id_seq', (SELECT MAX(a_id) + 1 FROM answers))`))
  .then(() => answersPhotos())
  .then(() => db.raw(`SELECT SETVAL('answers_photos_p_id_seq', (SELECT MAX(p_id) + 1 FROM answers_photos))`))
  .catch((err) => console.log(err))
  .finally(() => db.destroy(() => console.log('closed connection')));
