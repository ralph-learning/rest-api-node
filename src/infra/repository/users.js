const db = require("../database/models/index");

async function getOrCreateUser(username) {
  const options = {
    where: { username: username },
    default: {
      username,
    },
  };

  try {
    const [user, _created] = await db.user.findOrCreate(options);
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUser(username) {
  try {
    return await db.user.findOne({
      username: username,
      include: [{ model: db.repository, as: "repositories" }],
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getOrCreateUser,
  getUser,
};
