mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    isbn: String,
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