#!/usr/bin/env node
"use strict";

require("babel-register")({
  ignore: /victory-cli\/node_modules/
});

const path = require("path");
const commander = require("commander");
const termIMG = require("term-img");

const generatePng = require("../lib/generate-png.js");
const generateSvg = require("../lib/generate-svg.js");
const wrapperComponent = require("../lib/wrapper-component.js");

const program = new commander.Command("victory-cli");

const DEFAULT_DIMENSIONS = 500;

const pkg = require("../package.json");
program.version(pkg.version);
program.option(
  "-c, --charttype [charttype]",
  "'area', 'bar', 'line', 'scatter' or 'pie'",
  "line"
);
program.option("-f, --format [format]", "'png' or 'svg'", "png");
program.option("-p, --print", "Prints chart to console (iTerm3 & .png format only!)");
program.option("-h, --h [h]", "Chart height", DEFAULT_DIMENSIONS);
program.option("-w, --w [w]", "Chart width", DEFAULT_DIMENSIONS);
program.option("-x, --x [x]", "Data x value");
program.option("-y, --y [y]", "Data y value");
program.option("-t, --theme [theme]", "'light', 'dark' or 'hacker'", "hacker");

program.usage("[data] [script] [options]");
program.parse(process.argv);

const MIN_ARGS = 3;

if (program.rawArgs.length < MIN_ARGS) {
  program.outputHelp();
  return;
}

const cliOptions = {
  charttype: program.charttype,
  format: program.format,
  print: program.print,
  height: program.h,
  width: program.w,
  x: program.x,
  y: program.y,
  theme: program.theme
};

const DATA_ARG = 0;
const SCRIPT_ARG = 1;

let data;

if (program.args[DATA_ARG]) {
  const dataPath = path.join(process.cwd(), program.args[DATA_ARG]);
  data = require(dataPath);
} else {
  data = {
    data: [
      { x: 0, y: 10 },
      { x: 5, y: 20 },
      { x: 10, y: 30 },
      { x: 15, y: 40 },
      { x: 20, y: 50 }
    ]
  };
}

let component;

if (program.args[SCRIPT_ARG] !== undefined) {
  const scriptPath = path.join(process.cwd(), program.args[SCRIPT_ARG]);
  const script = require(scriptPath);

  component = script(data.data, cliOptions);
} else {
  component = wrapperComponent(data.data, cliOptions);
}

const SVG = generateSvg(component);

if (cliOptions.format === "svg") {
  process.stdout.write(SVG);
} else {
  generatePng(SVG, cliOptions)
  .then((output) => {
    if (cliOptions.print) {
      termIMG(output, {
        fallback: () => console.log("Printing images is only supported in the latest iTerm!")
      });
    } else {
      process.stdout.write(output);
    }
  })
  .catch((err) => {
    throw new Error(err);
  });
}
