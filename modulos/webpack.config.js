const path = require('path');

module.exports = {
  entry: './js/commonjs',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}