const fetch = require("node-fetch");
const repository = require(".");

const transformer = (repository) => ({
  name: repository.name,
  fullName: repository.full_name,
  descrition: repository.descrition,
  url: repository.url,
  html_url: repository.html_url,
});

module.exports = async function getRepoStar(req, res) {
  const githubStarEndpoint = `https://api.github.com/users/${req.params.username}/starred`;
  const result = await fetch(githubStarEndpoint);
  const repo = await result.json();

  res.json({ repo: repo.map(transformer), count: repo.length });
};
