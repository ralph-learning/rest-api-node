const repositoryModel = require("../../domain/repository.model");

const transformer = (repository) => ({
  name: repository.name,
  fullName: repository.full_name,
  descrition: repository.descrition,
  url: repository.url,
  html_url: repository.html_url,
});

async function saveRepositories(payload, username) {
  const repo = new repositoryModel({
    username,
    repos: payload.map(transformer),
  });

  try {
    const userRepositorieds = await repo.save();
    return userRepositorieds;
  } catch (error) {
    return error;
  }
}

async function getRepository({ username }) {
  try {
    const data = repositoryModel.find({ username });
    return data;
  } catch (error) {
    return error;
  }
}

module.exports = {
  saveRepositories,
  getRepository,
};
