const status = require("http-status");
const HttpError = require("./httpError");

module.exports = class HttpInternalServerError extends HttpError {
  constructor({ message = "Internal server error", data } = {}) {
    super({
      message,
      name: "HttpInternalServerError",
      statusCode: status.INTERNAL_SERVER_ERROR,
      data,
    });
  }
};
