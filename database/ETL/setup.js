const schema = require('../schema');
const answers = require('./answers');
const answers_photos = require('./answers_photo');
const questions = require('./questions');
const db = require('../db');

schema()
.then(() => answers())
.then(() => db.raw(`SELECT SETVAL('answers_id_seq', (SELECT MAX(id) + 1 FROM answers))`))
.then(() => questions())
.then(() => db.raw(`SELECT SETVAL('questions_id_seq', (SELECT MAX(id) + 1 FROM questions))`))
.then(() => answers_photos())
.then(() => db.raw(`SELECT SETVAL('answers_photos_id_seq', (SELECT MAX(id) + 1 FROM answers_photos))`))
.catch((err) => console.log(err))
.finally(() => db.destroy(() => console.log('closed connection')));