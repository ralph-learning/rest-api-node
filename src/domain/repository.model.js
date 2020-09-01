const { model, Schema } = require("mongoose");

const RepositoryModelSchema = new Schema({
  name: String,
  fullName: String,
  descrition: String,
  url: String,
  html_url: String,
});

const UserRepositoriesModelSchema = new Schema({
  username: String,
  repos: [RepositoryModelSchema],
});

module.exports = model("repository", UserRepositoriesModelSchema);
