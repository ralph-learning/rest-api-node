"use strict";

module.exports = (sequelize, DataTypes) => {
  const repository = sequelize.define("repository", {
    name: DataTypes.STRING,
    fullName: DataTypes.STRING,
    descrition: DataTypes.TEXT,
    url: DataTypes.STRING,
    htmlUrl: DataTypes.STRING,
  });

  return repository;
};
