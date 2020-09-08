const errorHandler = (err, _req, res, _next) => {
  const error = {
    statusCode: err.statusCode || 500,
    status: err.status || "failed",
    message: err.message,
    stack: err.stack,
  };

  return res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
    stack: error.stack,
  });
};

module.exports = errorHandler;
