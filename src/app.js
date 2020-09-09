const LogStream = require("./myStream");
const bodyParser = require("body-parser");
const errorHandler = require("./error-handler");
const express = require("express");
const morgan = require("morgan");
const repositoryCotroller = require("./controllers/repository");
const userCotroller = require("./controllers/user");
const { HttpNotFound } = require("./utils/errors");

const myStream = new LogStream();
const app = express();

app.use(morgan("dev", { stream: myStream }));
app.use(bodyParser.json());

app.get("/", (_req, res) => {
  res.json({ message: "Hello world" });
});
app.get("/repositories/:username", repositoryCotroller.getRepoStar);
app.post("/repositories", repositoryCotroller.create);
app.get("/users/:username", userCotroller.get);

app.all("*", (req, _res, next) => {
  next(new HttpNotFound(`Can't find ${req.originalUrl} on this server!`));
});

app.use(errorHandler);

module.exports = app;
