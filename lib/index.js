const sq = require("sequelize");

const sequelize = new sq.Sequelize({
  dialect: "sqlite",
  storage: "./db/book_author_database.sqlite",
});

module.exports = { DataTypes: sq.DataTypes, sequelize };
