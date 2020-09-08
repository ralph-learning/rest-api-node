const db = require("../database/models/index");
const { HttpBadRequest } = require("../../utils/errors");

async function getOrCreateUser(username) {
  const options = {
    where: { username },
    default: {
      username,
    },
  };

  try {
    const [user] = await db.user.findOrCreate(options);
    return user;
  } catch (error) {
    throw new HttpBadRequest(error);
  }
}

async function getUser({ username }) {
  try {
    return await db.user.findOne({
      where: { username },
      include: [{ model: db.repository, as: "repositories" }],
    });
  } catch (error) {
    throw new HttpBadRequest(error);
  }
}

module.exports = {
  getOrCreateUser,
  getUser,
};
