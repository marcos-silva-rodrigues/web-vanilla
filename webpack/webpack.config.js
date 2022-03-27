const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    // vendor: [],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    port: 8080,
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: '**/node_modules',
  },
  performance: {
    hints: false
  },
  devtool: 'source-map'
};