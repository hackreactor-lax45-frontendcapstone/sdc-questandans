const knex = require('knex');
const config = require('./config');

const db = knex({
  client: 'pg',
  connection: config,
  pool: { min: 0, max: 7 },
});

module.exports = db;
