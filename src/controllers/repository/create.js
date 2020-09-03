const repositoriesRepository = require("../../infra/repository/repositories");

module.exports = async function create(req, res) {
  const repository = req.body;

  try {
    const repositoryCreated = await repositoriesRepository.createRepository(
      repository
    );
    return res.json(repositoryCreated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
