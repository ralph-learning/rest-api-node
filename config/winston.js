const path = require("path");
const pathLog = path.join(__dirname, "../logs");
const winston = require("winston");

module.exports = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      dirname: pathLog,
      filename: "error.log",
      level: "error",
    }),
    new winston.transports.File({ dirname: pathLog, filename: "combined.log" }),
  ],
});
