var code;
var fs = require("fs");

exports.isSupported = true;

exports.getCode = function() {
  if (!code) {
    code = fs.readFileSync(
      require.resolve("./client-reorder-runtime.min.js"),
      "utf8"
    );
  }
  return code;
};
