const db = require('./db');

module.exports = () => db.schema
  .dropTableIfExists('answers_photos')
  .dropTableIfExists('answers')
  .dropTableIfExists('questions')
  .createTable('questions', (table) => {
    // table.increments('q_id');
    // table.integer('product_id');
    // table.index('product_id');
    // table.index('reported');
    // table.string('q_body');
    // table.float('q_date_written');
    // table.string('asker_name');
    // table.string('asker_email');
    // table.boolean('reported');
    // table.integer('q_helpful');
    table.increments('id');
    table.integer('product_id');
    table.index('product_id');
    table.index('reported');
    table.string('body');
    table.float('date_written');
    table.string('asker_name');
    table.string('asker_email');
    table.boolean('reported');
    table.integer('helpful');
  })
  .createTable('answers', (table) => {
    // table.increments('a_id');
    // table.integer('question_id');
    // table.foreign('question_id').references('questions.q_id');
    // table.index('question_id');
    // table.string('a_body');
    // table.float('a_date_written');
    // table.string('answerer_name');
    // table.string('answer_email');
    // table.boolean('reported');
    // table.integer('a_helpful');
    table.increments('id');
    table.integer('question_id');
    table.index('question_id');
    table.string('body');
    table.float('date_written');
    table.string('answerer_name');
    table.string('answer_email');
    table.boolean('reported');
    table.integer('helpful');
  })
  .createTable('answers_photos', (table) => {
    // table.increments('p_id');
    // table.integer('answer_id');
    // table.foreign('answer_id').references('answers.a_id');
    // table.index('answer_id');
    // table.string('url');
    table.increments('id');
    table.integer('answer_id');
    table.index('answer_id');
    table.string('url');
  })
  .then(() => {
    console.log('db and tables created!');
  })
  .catch((err) => console.error(err));


// DROP TABLE IF EXISTS answers_photo;

// CREATE TABLE answers_photo (
//   id SERIAL PRIMARY KEY,
//   answer_id INTEGER NULL DEFAULT NULL,
//   url VARCHAR(150) NULL DEFAULT NULL
// );

// DROP TABLE IF EXISTS answers;

// CREATE TABLE answers (
//   id SERIAL PRIMARY KEY,
//   question_id INTEGER NULL DEFAULT NULL,
//   body VARCHAR(250) NULL DEFAULT NULL,
//   date_written FLOAT NULL DEFAULT NULL,
//   answerer_name VARCHAR(250) NULL DEFAULT NULL,
//   answer_email VARCHAR(250) NULL DEFAULT NULL,
//   reported BOOLEAN NULL DEFAULT NULL,
//  helpful INTEGER NULL DEFAULT NULL
// );

// DROP TABLE IF EXISTS questions;

// CREATE TABLE questions (
//   id SERIAL PRIMARY KEY,
//   product_id INTEGER NULL DEFAULT NULL,
//   body VARCHAR(250) NULL DEFAULT NULL,
//   date_written FLOAT NULL DEFAULT NULL,
//   asker_name VARCHAR(250) NULL DEFAULT NULL,
//   asker_email VARCHAR(250) NULL DEFAULT NULL,
//   reported BOOLEAN NULL DEFAULT NULL,
//   helpful INTEGER NULL DEFAULT NULL
// );

// ALTER TABLE answers_photo ADD FOREIGN KEY (answer_id) REFERENCES answers (id);
// ALTER TABLE answers ADD FOREIGN KEY (question_id) REFERENCES questions (id);
