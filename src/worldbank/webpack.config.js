const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: "/src/map.js",
  output: {
    path: path.resolve(__dirname, "./static/worldbank/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
 
};