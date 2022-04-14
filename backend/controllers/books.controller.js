const fs = require("fs");

let books = [];

fs.readFile("books.json", (err, data) => {
  if (err) throw err;

  books = JSON.parse(data);
});

// adding middlewares to filter books by category or by author
