"use strict";


const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "./src/index.scss",
    "./src/index.js"
  ],
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      loader: "html",
      test: /\.html$/
    }, {
      loader: "style!css!postcss!sass",
      test: /\.scss$/
    }, {
      loader: "babel",
      test: /\.jsx?$/,
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.ejs"
    }),
    new webpack.NoErrorsPlugin()
  ],
  devtool: "eval-source-map",
  postcss() {
    return [
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    ];
  }
};
