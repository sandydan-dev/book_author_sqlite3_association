const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");

const { sequelize } = require("./lib/index");
const book = require("./models/book.model");
const author = require("./models/author.model");
const bookAuthor = require("./models/bookAuthor.model");

const bookData = [
  {
    title: "Harry Potter and the Philosophers Stone",
    genre: "Fantasy",
    publicationYear: 1997,
  },
  { title: "A Game of Thrones", genre: "Fantasy", publicationYear: 1996 },
  { title: "The Hobbit", genre: "Fantasy", publicationYear: 1937 },
];

const authorData = [
  { name: "J.K Rowling", birthYear: 1965 },
  { name: "S.K. Dhanwate", birthYear: 1993 },
];

// middelwares
app.use(cors());
app.use(express.json());

// seeding sample data to db

app.get("/seed_db", async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await book.bulkCreate(bookData);
    await author.bulkCreate(authorData);

    res.status(200).send("Database seeded successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// listening incoming request
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
