const { sequelize, DataTypes } = require("../lib/index");

const book = sequelize.define("book", {
  title: DataTypes.TEXT,
  genre: DataTypes.TEXT,
  publicationYear: DataTypes.INTEGER,
});

module.exports = book;
