"use strict";

var core = require("@actions/core");
var crypto = require("crypto");

var lines = function (str) {
  return str
    .split("")
    .filter(function (i) {
      return i !== " ";
    })
    .join("")
    .split("\n")
    .filter(function (i) {
      return i !== "";
    });
};

var set = function (names) {
  lines(names).forEach(function (name) {
    if (/[a-zA-Z_]+[a-zA-Z0-9_]*/u.test(name)) {
      console.log("Setting a random value for: ".concat(name));
      core.exportVariable(name, crypto.randomBytes(16).toString("hex"));
    } else {
      core.setFailed("Invalid identifier name: ".concat(name));
      process.exit(1);
    }
  });
};

var names = process.env.INPUT_NAMES;
if (names) {
  set(names);
}
