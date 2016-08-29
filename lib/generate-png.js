"use strict";

const childProcess = require("child_process");
const path = require("path");
const phantomjs = require("phantomjs2");

const binPath = phantomjs.path;

module.exports = function generatePng(markup, options) {
  return new Promise((resolve, reject) => {
    try {
      const childArgs = [
        path.join(__dirname, "rasterizer.js"),
        new Buffer(markup),
        options.height,
        options.width
      ];

      childProcess.execFile(binPath, childArgs, (err, stderr, stdout) => {
        if (err) {
          reject(err);
        }
        const output = new Buffer(stdout, "base64");
        resolve(output);
      });
    } catch (e) {
      reject(e);
    }
  });
};
