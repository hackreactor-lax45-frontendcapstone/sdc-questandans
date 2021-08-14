const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
// const path = require('path');
const port = 3010;
const server = express();
const router = require('./router');

server.use(bodyParser.json());
// server.use(express.static(path.join(__dirname, '../client')));

server.use('/api', router);

server.listen(port, () => console.log('listening to port number: ', port));
