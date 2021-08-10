const express = require('express');
// const path = require('path');
const port = 3000;
const router = require('./routers/router');

const server = express();
server.use('/qa', router);
// server.use(express.static(path.join(__dirname, '../client')));

server.listen(port, () =>
  console.log('listening to port number: ', port));