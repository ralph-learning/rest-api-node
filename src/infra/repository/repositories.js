const db = require("../database/models");

function createRepository(data) {
  const repository = db.repository.build(data);

  return repository.save();
}

module.exports = {
  createRepository,
};
