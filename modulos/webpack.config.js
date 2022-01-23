const path = require('path');

module.exports = {
  entry: './js/amd',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}