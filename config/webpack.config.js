"use strict";

const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");
const PATHS = require("./paths");

// Merge webpack configuration files
const config = merge(common, {
  entry: {
    // background: PATHS.src + "/background.ts",
    contentScript: PATHS.src + "/contentScript.ts",
    options: PATHS.src + "/options.ts",
  },
});

module.exports = config;
