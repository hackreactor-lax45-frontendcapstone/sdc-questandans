const db = require('./db');

module.exports = () => db.schema
  .dropTableIfExists('answers_photos')
  .dropTableIfExists('answers')
  .dropTableIfExists('questions')
  .createTable('questions', (table) => {
    table.increments('id');
    table.integer('product_id');
    table.index('product_id');
    table.index('reported');
    table.string('q_body');
    table.float('date_written');
    table.string('asker_name');
    table.string('asker_email');
    table.boolean('reported');
    table.integer('q_helpful');
  })
  .createTable('answers', (table) => {
    table.increments('id');
    table.integer('question_id');
    table.foreign('question_id').references('questions.id');
    table.index('question_id');
    table.string('a_body');
    table.float('date_written');
    table.string('answerer_name');
    table.string('answer_email');
    table.boolean('reported');
    table.integer('a_helpful');
  })
  .createTable('answers_photos', (table) => {
    table.increments('id');
    table.integer('answer_id');
    table.foreign('answer_id').references('answers.id');
    table.index('answer_id');
    table.string('url');
  })
  .then(() => {
    console.log('db and tables created!');
  })
  .catch((err) => console.error(err));
