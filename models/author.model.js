const { sequelize, DataTypes } = require("../lib/index");

const author = sequelize.define("author", {
  name: DataTypes.TEXT,
  birthYear: DataTypes.INTEGER,
});

module.exports = author;
