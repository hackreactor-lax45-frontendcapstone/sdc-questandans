const fs = require('fs');
const path = require('path');
const { Pool, Client } = require('pg');
const copyFrom = require('pg-copy-streams').from;
const config = require('../config');

module.exports = () => {
// inputfile & target table
  const inputFile = path.join(__dirname, '../data/questions.csv');
  const table = 'questions';

  // connect to database
  const client = new Client(config);

  return new Promise((resolve, reject) => {
    client.connect(() => {
      const stream = client.query(copyFrom(`COPY ${table} FROM STDIN WITH CSV HEADER`));
      const fileStream = fs.createReadStream(inputFile);
      fileStream.on('error', (error) => {
        console.log(`Error in reading file: ${error}`);
        client.end();
        reject();
      });
      stream.on('error', (error) => {
        console.log(`Error in copy command: ${error}`);
        client.end();
        reject();
      });
      stream.on('finish', () => {
        console.log(`Completed loading data into ${table}`);
        client.end();
        resolve();
      });
      fileStream.pipe(stream);
    });
  });
};
