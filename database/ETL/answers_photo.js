const fs = require('fs');
const path = require('path');
const { Pool, Client } = require('pg');
const copyFrom = require('pg-copy-streams').from;
const config = require('../config');

// inputfile & target table
const inputFile = path.join(__dirname, '../data/answers_photos_example.csv');
const table = 'answers_photos';

// connect to database
const client = new Client(config);

client.connect();

// execute copy function
const stream = client.query(copyFrom(`COPY ${table} FROM STDIN WITH CSV HEADER`));
const fileStream = fs.createReadStream(inputFile);
fileStream.on('error', (error) => {
  console.log(`Error in reading file: ${error}`);
});
stream.on('error', (error) => {
  console.log(`Error in copy command: ${error}`);
});
stream.on('end', () => {
  console.log(`Completed loading data into ${table}`);
  client.end();
});
fileStream.pipe(stream);
