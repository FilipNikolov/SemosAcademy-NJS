const { Validator } = require('node-input-validator');

const Book = {
    name: 'required|string',
    genre: 'required|string',
    year: 'required|integer',
    writer: 'required|string'
};

const BookPartial = {
    name: 'string',
    genre: 'string',
    year: 'integer',
    writer: 'string'
};

const validate = async(data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    Book,
    BookPartial,
    validate
}