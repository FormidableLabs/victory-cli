"use strict";

/**
 * This file utilizes phantom <https://www.npmjs.com/package/phantom>
 * to create a programmatic for us to render a Victory component to,
 * which is then written to a png.
 */

// @TODO - figure out how and where this file is consumed
//         (cliOptions are passed in.. how?)

const phantom = require("phantom");
const fs = require("fs");

const DEFAULT_DIMENSIONS = 500;

(async function (cliOptions) {
  // We have to spin up a phantom instance
  const instance = await phantom.create();
  // ... to then create a phantom "page"
  const page = await instance.createPage();

  const HEIGHT = cliOptions.height || DEFAULT_DIMENSIONS;
  const WIDTH = cliOptions.width || DEFAULT_DIMENSIONS;

  // The chart data, fetched from [@TODO - where? cliOptions?]
  const markup = "";

  // @TODO - update to use new phantom API
  // Add a viewport to our phantom page
  page.viewportSize = {
    width: WIDTH,
    height: HEIGHT
  };

  // Then, add an svg clipRect to that viewport
  page.clipRect = {
    top: 0,
    left: 0,
    width: WIDTH,
    height: HEIGHT
  };

  // Then, add chart content to our clipRect
  page.content = markup;

  const base64 = page.renderBase64("PNG");
  fs.write("/dev/stderr", base64);

  await instance.exit();
})();
