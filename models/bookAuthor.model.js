const { sequelize, DataTypes } = require("../lib/index");
const book = require("../models/book.model");
const author = require("../models/author.model");

const bookAuthor = sequelize.define("bookauthor", {
  bookId: {
    type: DataTypes.INTEGER,
    references: {
      model: book,
      key: "id",
    },
  },
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: author,
      key: "id",
    },
  },
});

// define association

book.belongsToMany(author, { through: bookAuthor });
author.belongsToMany(book, { through: bookAuthor });

module.exports = bookAuthor;
