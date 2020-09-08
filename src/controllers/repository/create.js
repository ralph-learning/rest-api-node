const repositoriesRepository = require("../../infra/repository/repositories");

module.exports = async function create(req, res, next) {
  const repository = req.body;

  try {
    const repositoryCreated = await repositoriesRepository.createRepository(
      repository
    );

    return res.json(repositoryCreated);
  } catch (error) {
    next(error);
  }
};
