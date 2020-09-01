const express = require("express");
const bodyParser = require("body-parser");
const repositoryCotroller = require("./controllers/repository");

const app = express();

app.use(bodyParser.json());
app.get("/", (_req, res) => {
  res.json({ message: "Hello world" });
});

// app.get("/repositories", repositoryCotroller.getByUser);

app.listen(4000, () => {
  console.log("Running at port 4000");
});
