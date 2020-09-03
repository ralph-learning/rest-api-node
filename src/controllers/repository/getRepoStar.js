const fetch = require("node-fetch");
const userRepository = require("../../infra/repository/users");
const winston = require("../../../config/winston");

const transformer = (repository) => ({
  name: repository.name,
  fullName: repository.full_name,
  descrition: repository.descrition,
  url: repository.url,
  html_url: repository.html_url,
  id: repository.id,
});

module.exports = async function getRepoStar(req, res) {
  const { username } = req.params;

  try {
    await userRepository.getOrCreateUser(username);

    const githubStarEndpoint = `https://api.github.com/users/${username}/starred`;
    const repoStarsGithub = await fetch(githubStarEndpoint);
    const repoStarsGithubJson = await repoStarsGithub.json();

    return res.json({
      repo: repoStarsGithubJson.map(transformer),
      count: repoStarsGithubJson.length,
    });
  } catch (error) {
    winston.log("error", { message: error });
    return res.status(500).json({ error: error.message });
  }
};
