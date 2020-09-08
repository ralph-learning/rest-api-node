const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const winston = require("../config/winston");
const errorHandler = require("./error-handler");

const repositoryCotroller = require("./controllers/repository");
const userCotroller = require("./controllers/user");

const { HttpNotFound } = require("./utils/errors");

class MyStream {
  write(message) {
    winston.info(message);
  }
}
const myStream = new MyStream();

const app = express();

app.use(morgan("dev", { stream: myStream }));
app.use(bodyParser.json());
app.get("/", (_req, res) => {
  res.json({ message: "Hello world" });
});

app.get("/repositories/:username", repositoryCotroller.getRepoStar);
app.post("/repositories", repositoryCotroller.create);

app.get("/users/:username", userCotroller.get);

app.use(errorHandler);

app.all("*", (req, _res, next) => {
  next(new HttpNotFound(`Can't find ${req.originalUrl} on this server!`));
});

app.listen(4000, () => {
  winston.info("Running at port 4000");
});
