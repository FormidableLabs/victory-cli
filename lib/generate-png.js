"use strict";

const stream = require("stream");
const Rsvg = require("librsvg").Rsvg;

module.exports = function generatePng(markup, options) {
  return new Promise((resolve, reject) => {
    try {
      const svg = new Rsvg();

      svg.on("finish", () => {
        resolve(svg.render({
          format: "png",
          width: options.width,
          height: options.height
        }).data);
      });

      const bufferStream = new stream.PassThrough();

      bufferStream.end(new Buffer(markup));
      bufferStream.pipe(svg);

    } catch (e) {
      reject(e);
    }
  });
};
