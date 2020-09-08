const db = require("../database/models/index");

async function getOrCreateUser(username) {
  const options = {
    where: { username },
    default: {
      username,
    },
  };

  const [user] = await db.user.findOrCreate(options);
  return user;
}

function getUser({ username }) {
  return db.user.findOne({
    where: { username },
    include: [{ model: db.repository, as: "repositories" }],
  });
}

module.exports = {
  getOrCreateUser,
  getUser,
};
