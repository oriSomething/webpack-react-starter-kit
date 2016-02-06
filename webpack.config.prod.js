"use strict";


const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: [
    "./src/index.scss",
    "./src/index.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      loader: "html",
      test: /\.html$/
    }, {
      loader: ExtractTextPlugin.extract("css!postcss!sass"),
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
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  postcss() {
    return [
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    ];
  }
};
