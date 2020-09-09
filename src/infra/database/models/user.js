const { Sequelize } = require("sequelize");

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

  user.associate = (models) => {
    user.hasMany(models.repository, {
      as: "repositories",
      foreignKey: "userId",
    });
  };

  return user;
};
