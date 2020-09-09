const status = require("http-status");
const HttpError = require("./httpError");

module.exports = class HttpNotFound extends HttpError {
  constructor({ message = "Not found", data } = {}) {
    super({
      message,
      name: "HttpNotFound",
      statusCode: status.NOT_FOUND,
      data,
    });
  }
};
