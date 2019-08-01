const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  watch: true,
  output: {
    path: __dirname + "/lib",
    filename: "main.js"
  }
};
