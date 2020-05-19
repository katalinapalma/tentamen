mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    isbn: Number,
    title: String,
    author: String,
    price: Number,
    selleremail: String,
    used: Boolean,
    location: {
        city: String,
        street: String,
    } 
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;