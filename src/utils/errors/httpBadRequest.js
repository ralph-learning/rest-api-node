const status = require("http-status");
const HttpError = require("./httpError");

module.exports = class HttpBadRequest extends HttpError {
  constructor({ message = "Bad request", data } = {}) {
    super({
      message,
      name: "HttpBadRequest",
      statusCode: status.BAD_REQUEST,
      data,
    });
  }
};
