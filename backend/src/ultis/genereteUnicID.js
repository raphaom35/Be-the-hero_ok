const crypto = require("crypto");
module.exports = function generateUnicID() {
  return crypto.randomBytes(4).toString("HEX");
};
