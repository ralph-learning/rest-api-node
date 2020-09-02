const fetch = require("node-fetch");
const repositoriesRepository = require("../../infra/repository/repositories");
const winston = require("../../../config/winston");

module.exports = async function getRepoStar(req, res) {
  const { username } = req.params;

  try {
    const data = await repositoriesRepository.getRepository({ username });
    if (data.length > 0) {
      return res.json({ repo: data, count: data.length });
    }

    const githubStarEndpoint = `https://api.github.com/users/${username}/starred`;
    const repoStarsGithub = await fetch(githubStarEndpoint);
    const repoStarsGithubJson = await repoStarsGithub.json();
    const repositoriesStars = await repositoriesRepository.saveRepositories(
      repoStarsGithubJson,
      username
    );

    res.json({
      repo: repositoriesStars,
      count: repositoriesStars.length,
    });
  } catch (error) {
    winston.log("error", { message: error });
    res.status(500).json({ error: error.message });
  }
};
