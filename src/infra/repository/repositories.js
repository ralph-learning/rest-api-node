const db = require("../database/models");

async function createRepository(data) {
  const repository = db.repository.build(data);

  try {
    return await repository.save();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createRepository,
};
