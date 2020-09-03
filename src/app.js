const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const winston = require("../config/winston");

const repositoryCotroller = require("./controllers/repository");

class MyStream {
  write(message) {
    winston.info(message);
  }
}
let myStream = new MyStream();

const app = express();

app.use(morgan("dev", { stream: myStream }));
app.use(bodyParser.json());
app.get("/", (_req, res) => {
  res.json({ message: "Hello world" });
});

app.get("/repositories/:username", repositoryCotroller.getRepoStar);
app.post("/repositories", repositoryCotroller.create);

app.get("/users/:username", repositoryCotroller.getUser);

app.listen(4000, () => {
  console.log("Running at port 4000");
});
