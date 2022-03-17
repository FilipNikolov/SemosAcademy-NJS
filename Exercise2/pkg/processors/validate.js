const { Validator } = require('node-input-validator');

const Processor = {
    cores: 'required|integer',
    threads: 'required|integer',
    manufacturer: 'required|string',
    model: 'required|string'
};

const ProccesorPartial = {
    cores: 'integer',
    threads: 'integer',
    manufacturer: 'string',
    model: 'string'
};

const validate = async(data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    Processor,
    ProccesorPartial,
    validate
}