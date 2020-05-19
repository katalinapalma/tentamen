const express = require('express');
const router = express.Router();

const book = require('./book.js');

router.get("/books", book.get)
router.get("/books/:id", book.getBookById);
router.post("/books", book.postBook);

module.exports = router