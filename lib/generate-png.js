"use strict";

const stream = require("stream");
const Rsvg = require("librsvg").Rsvg;

const generatePng = async (markup, options) => {
  const svg = await new Rsvg();
  const bufferStream = await new stream.PassThrough();

  svg.on("finish", () => svg.render({
    format: "png",
    width: options.width,
    height: options.height
  }).data);

  bufferStream.end(new Buffer(markup));
  bufferStream.pipe(svg);
};

module.exports = generatePng;
