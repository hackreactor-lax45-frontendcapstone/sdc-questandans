var path = require('path');
var SRC_DIR = path.join(__dirname, './server');
var DIST_DIR = path.join(__dirname, './dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  mode: 'development',
  target: 'node',
  stats: 'errors-only'
}