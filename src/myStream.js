const winston = require("../config/winston");

module.exports = class MyStream {
  write(message) {
    winston.info(message);
  }
};
