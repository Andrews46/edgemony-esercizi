const express = require("express");
const bookFile = require("./book.json");
const book = require("./book.json");
const app = express();
const PORT = 4000;

app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/json", (req, res) => {
  res.json(bookFile);
});

// app.get("/api/book", (req, res) => {
//   console.log(req.book);
//   const { search, limit } = req.book;
//   let filterBook = [...book];

//   if (search) {
//     filterBook = filterBook.filter((book) => {
//       return book.titolo.startsWith(search);
//     });
//   }

//   res.status(200).json(filterBook);
// });

app.get("/api/book", (req, res) => {
  const newBook = book.map((book) => {
    const { id, titolo, author } = book;
    return { id, titolo, author };
  });
  res.json(newBook);
});

app.listen(4000, () => {
  console.log(`server attivo ${PORT}`);
});
