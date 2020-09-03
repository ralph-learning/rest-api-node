const db = require("../database/models/index");

async function getUser(username) {
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

module.exports = {
  getUser,
};
