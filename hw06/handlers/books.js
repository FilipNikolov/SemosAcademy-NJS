const books = require('../pkg/books');
const validator = require('../pkg/books/validate');

const getAll = async(req, res) => {
    try {
        let bs = await books.getAllBooks();
        return res.status(200).send(bs);
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error ${err}!`)
    }
};
const getOneBook = async(req, res) => {
    try {
        let bs = await books.getOneBook(req.params.id);
        return res.status(200).send(bs)
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error ${err}!`)
    }
};
const Create = async(req, res) => {
    try {
        await validator.validate(req.body, validator.Book);
        let bs = await books.addBook(req.body);
        return res.status(204).send(bs);
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error ${err}!`)
    }
};
const Update = async(req, res) => {
    try {
        await validator.validate(req.body, validator.Book);
        await books.updateBook(req.params.id, req.body);
        return res.status(204).send("Ok");
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error ${err}!`)
    }
};
const UpdatePartial = async(req, res) => {
    try {
        await validator.validate(req.body, validator.BookPartial);
        await books.updateBook(req.params.id, req.body);
        return res.status(204).send("Ok");
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error ${err}!`)
    }
};
const Delete = async(req, res) => {
    try {
        await books.removeBook(req.params.id);
        return res.status(204).send("Deleted!")
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error ${err}!`)
    }
};

module.exports = {
    getAll,
    getOneBook,
    Create,
    Update,
    UpdatePartial,
    Delete
};