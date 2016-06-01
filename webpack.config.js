"use strict"

const path = require("path");
const webpack = require("webpack");

const PATHS = {
  root: path.join(__dirname, "public", "app"),
  dist: path.join(__dirname, "public", "dist")
};

const LOADERS = {
  babel: {
    test: /\.js$/,
    exclude: "/node_modules/",
    loader: "babel-loader",
    cacheDirectory: true,
    query: {
      presets: ['react','es2015']
    }
  },

  css: {
    test: /\.css$/,
    loader: "style-loader!css-loader"
  }
};



module.exports = {
  entry: [
    PATHS.root
  ],
  output: {
    path: PATHS.dist,
    filename: "bundle.js"
  },
  module: {
    loaders: [ LOADERS.babel, LOADERS.css ]
  },
  jshint: {
    esversion: 6
  },
  devServer: {
    contentBase: PATHS.dist,
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
}

