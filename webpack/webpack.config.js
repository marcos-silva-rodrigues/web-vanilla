const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    // vendor: [],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
};