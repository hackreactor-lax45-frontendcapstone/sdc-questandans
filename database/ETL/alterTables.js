const db = require('../db');

db.raw(`SELECT SETVAL('answers_photos_id_seq', (SELECT MAX(id) + 1 FROM answers_photos))`);
