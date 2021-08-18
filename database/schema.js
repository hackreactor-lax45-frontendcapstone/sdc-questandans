const db = require('./db');

module.exports = () => db.schema
  .dropTableIfExists('answers')
  .dropTableIfExists('answers_photos')
  .dropTableIfExists('questions')
  .createTable('answers', (table) => {
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
    table.increments('id');
    table.integer('answer_id');
    table.index('answer_id');
    table.string('url');
  })
  .createTable('questions', (table) => {
    table.increments('id');
    table.integer('product_id');
    table.index('product_id');
    table.string('body');
    table.float('date_written');
    table.string('asker_name');
    table.string('asker_email');
    table.boolean('reported');
    table.integer('helpful');
  })
  .then(() => {
    console.log('db and tables created!');
  })
  .catch((err) => console.error(err));
