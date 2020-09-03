const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const repository = sequelize.define("repository", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    tags: DataTypes.STRING,
    userId: DataTypes.STRING,
    repositoryId: DataTypes.STRING,
    fullName: DataTypes.STRING,
    url: DataTypes.STRING,
  });

  repository.associate = (models) => {
    repository.belongsTo(models.user, { foreignKey: "userId" });
  };

  return repository;
};
