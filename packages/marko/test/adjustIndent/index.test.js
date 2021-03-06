"use strict";

require("../__util__/test-init");

var adjustIndent = require("marko/compiler/util/adjustIndent");
var autotest = require("../autotest");
var fs = require("fs");

autotest("fixtures", fixture => {
  let test = fixture.test;
  let resolve = fixture.resolve;
  let snapshot = fixture.snapshot;
  test(() => {
    var testSettings = require(resolve("test.js"));
    var input = fs.readFileSync(resolve("input.txt"), { encoding: "utf8" });
    var newIndentation = testSettings.newIndentation;
    var output = adjustIndent(input, newIndentation);
    snapshot(output, ".txt");
  });
});
