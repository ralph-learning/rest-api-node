"use strict";

const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const repository = sequelize.define("repository", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    fullName: DataTypes.STRING,
    descrition: DataTypes.TEXT,
    url: DataTypes.STRING,
    htmlUrl: DataTypes.STRING,
  });

  return repository;
};
