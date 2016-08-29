/* eslint-disable */
// ^ phantom is funny about es6

"use strict";

var page = require("webpage").create();
var system = require("system");
var fs = require("fs");

var markup = system.args[1];
var HEIGHT = system.args[2];
var WIDTH = system.args[3];

page.viewportSize = { width: WIDTH, height: HEIGHT };
page.clipRect = { top: 0, left: 0, width: WIDTH, height: HEIGHT };
page.content = markup;

setTimeout(function () {
  var base64 = page.renderBase64("PNG");
  fs.write("/dev/stderr", base64);
  phantom.exit();
}, 200);