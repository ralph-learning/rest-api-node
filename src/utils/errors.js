const status = require("http-status");

class HttpError extends Error {
  constructor({ message, name, statusCode, data }) {
    super(message);

    this.name = name;
    this.statusCode = statusCode;
    this.data = data;

    Error.captureStackTrace(this, HttpError);
  }
}

class HttpBadRequest extends HttpError {
  constructor({ message = "Bad request", data } = {}) {
    super({
      message,
      name: "HttpBadRequest",
      statusCode: status.BAD_REQUEST,
      data,
    });
  }
}

class HttpNotFound extends HttpError {
  constructor({ message = "Not found", data } = {}) {
    super({
      message,
      name: "HttpNotFound",
      statusCode: status.NOT_FOUND,
      data,
    });
  }
}

class HttpInternalServerError extends HttpError {
  constructor({ message = "Internal server error", data } = {}) {
    super({
      message,
      name: "HttpInternalServerError",
      statusCode: status.INTERNAL_SERVER_ERROR,
      data,
    });
  }
}

module.exports = {
  HttpError,
  HttpInternalServerError,
  HttpNotFound,
  HttpBadRequest,
};
