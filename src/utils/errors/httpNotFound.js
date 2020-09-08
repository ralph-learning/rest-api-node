const status = require("http-status");
const HttpError = require("./httpError");

module.exrpots = class HttpNotFound extends HttpError {
  constructor({ message = "Not found", data } = {}) {
    super({
      message,
      name: "HttpNotFound",
      statusCode: status.NOT_FOUND,
      data,
    });
  }
};
