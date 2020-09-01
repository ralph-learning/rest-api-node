const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/repositories-challenge",
  {
    useNewUrlParser: true,
  },
  function () {
    console.log("Database connected");
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
