const userRepository = require("../../infra/repository/users");
const { HttpNotFound } = require("../../utils/errors");

module.exports = async function getUser(req, res, next) {
  try {
    const user = await userRepository.getUser({
      username: req.params.username,
    });

    if (user === null)
      throw new HttpNotFound({
        message: `The user '${req.params.username}' was not found`,
      });

    return res.json(user);
  } catch (error) {
    next(error);
  }
};
