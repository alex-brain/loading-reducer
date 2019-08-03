const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: __dirname + "/lib",
    filename: "main.js",
    library: 'loading',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
