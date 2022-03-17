const { Validator } = require("node-input-validator");

const Car = {
    model: 'required|string',
    manufacturer: 'required|string',
    year: 'required/integer',
};

const validate = async(data, schema) => {
    let v = new Validator(data, schema);
    return await v.check();
};

module.exports = {
    Car,
    validate
}