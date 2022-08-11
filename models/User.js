const { DataTypes } = require("sequelize");
const db = require("../configs/database");

const User = db.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: DataTypes.STRING(80),
  email: {
    type: DataTypes.STRING(255),
    unique: true,
  },
  // image: {
  //   type: DataTypes.STRING(255),
  //   allowNull: true,
  // },
  password: {
    type: DataTypes.STRING(255),
  },
});

module.exports = User;
