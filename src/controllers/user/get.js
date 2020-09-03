const winston = require("../../../config/winston");
const userRepository = require("../../infra/repository/users");

module.exports = async function getUser(req, res) {
  try {
    const user = await userRepository.getUser({
      username: req.params.username,
    });
    res.json(user);
  } catch (error) {
    winston.log("error", { message: error });
    return res.status(500).json({ error: error.message });
  }
};
