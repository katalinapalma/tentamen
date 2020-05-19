const express = require('express');
const router = express.Router();

const book = require('./book.js');

router.get("/books", book.get)
router.get("/books/:id", book.getBookById);
router.put("/books/:id", book.put);
router.post("/books", book.postBook);
router.delete("/books/:id", book.deleteBookById);

module.exports = router;