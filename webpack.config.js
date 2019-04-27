const path = require('path');

module.exports = {
  entry: "./src/client/App.js",
  output: {
    path: path.join(__dirname, "/src/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      use: {
        loader: "babel-loader"
      },
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};