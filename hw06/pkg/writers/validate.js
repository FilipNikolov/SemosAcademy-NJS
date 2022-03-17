const { Validator } = require('node-input-validator');

const Writer = {
    first_name: 'required|string',
    last_name: 'required|string',
    year_of_birth: 'required|integer',
    books: 'required|integer',
    year_of_death: 'required|integer'
};

const WriterPartial = {
    first_name: 'string',
    last_name: 'string',
    year_of_birth: 'integer',
    books: 'integer',
    year_of_death: 'integer'
};

const validate = async(data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    Writer,
    WriterPartial,
    validate
}