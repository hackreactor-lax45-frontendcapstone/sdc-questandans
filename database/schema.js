const knex = require('knex');
const config = require('./config');

const db = knex({
  client: 'pg',
  connection: config,
});

db.schema
  .dropTableIfExists('answers')
  .dropTableIfExists('answers_photos')
  .dropTableIfExists('questions')
  .createTable('answers', (table) => {
    table.increments('id');
    table.integer('question_id');
    table.string('body', 50);
    table.float('date_written');
    table.string('answerer_name', 50);
    table.string('answer_email', 50);
    table.integer('reported');
    table.integer('helpful');
  })
  .createTable('answers_photos', (table) => {
    table.increments('id');
    table.integer('answer_id');
    table.string('url', 200);
  })
  .createTable('questions', (table) => {
    table.increments('id');
    table.integer('product_id');
    table.float('date_written');
    table.string('asker_name', 50);
    table.string('asker_email', 50);
    table.integer('reported');
    table.integer('helpful');
  })
  .then(() => {
    console.log('db and table created!');
  })
  .catch((err) => console.error(err))
  .finally(() => db.destroy(() => { console.log('connection closed!'); }));
