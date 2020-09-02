const winston = require("../../../config/winston");
const db = require("../database/models/index");

const transformer = (repository) => ({
  name: repository.name,
  fullName: repository.full_name,
  descrition: repository.descrition,
  url: repository.url,
  html_url: repository.html_url,
});

async function saveRepositories(payload, username) {
  const repo = db.repository.build({
    name: "John",
    fullName: "John Doe",
    html_url: "http://",
    url: "http://",
    descrition: "Any",
  });

  try {
    const data = await repo.save();
    return data;
  } catch (error) {
    winston.error(error);
    throw error;
  }
}

async function getRepository({ username }) {
  try {
    const data = await db.repository.findAll();
    return data;
  } catch (error) {
    winston.error(error);
    throw error;
  }
}

module.exports = {
  saveRepositories,
  getRepository,
};
