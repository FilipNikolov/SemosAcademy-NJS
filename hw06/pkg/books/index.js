const mongoose = require('mongoose');

const Book = mongoose.model(
    'books', {
        name: String,
        genre: String,
        year: Number,
        writer: String
    },
    'books'
);
const addBook = async(books) => {
    let b = new Book(books);
    return await b.save();
};
const removeBook = async(id) => {
    return await Book.deleteOne({ _id: id });
};
const updateBook = async(id, books) => {
    return await Book.updateOne({ _id: id }, books);
};
const getAllBooks = async(req, res) => {
    return await Book.find({});
};
const getOneBook = async(id) => {
    return await Book.findOne({ _id: id });
};

module.exports = {
    addBook,
    removeBook,
    updateBook,
    getAllBooks,
    getOneBook
};