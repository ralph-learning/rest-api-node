const { Sequelize } = require("sequelize");
const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    username: DataTypes.STRING,
  });

  return user;
};
