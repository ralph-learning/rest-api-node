const winston = require("../config/winston");

module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "repo_development",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: (msg) => winston.info(msg),
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "repo_test",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: (msg) => winston.info(msg),
  },
  production: {
    username: "postgres",
    password: "postgres",
    database: "repo_production",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: (msg) => winston.info(msg),
  },
};
