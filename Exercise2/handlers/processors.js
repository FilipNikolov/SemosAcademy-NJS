const processors = require('../pkg/processors');
const validator = require('../pkg/processors/validate');

const getAll = async(req, res) => {
    try {
        let pr = await processors.getAllProcessors();
        return res.status(200).send(pr);
    } catch (err) {
        console.log(err)
        return res.status(500).send(`Interval Server Error!${err}`)
    }
};
const getOneProcessor = async(req, res) => {
    try {
        let pr = await processors.getOneProcessor(req.params.id);
        return res.status(200).send(pr);
    } catch (err) {
        console.log(err)
        return res.status(500).send(`Interval Server Error!${err}`)
    }
};
const Create = async(req, res) => {
    try {
        await validator.validate(req.body, validator.Processor);
        let pr = await processors.addProcessor(req.body);
        return res.status(201).send(pr);
    } catch (err) {
        console.log(err)
        return res.status(500).send(`Interval Server Error!${err}`)
    }
};
const Update = async(req, res) => {
    try {
        await validator.validate(req.body, validator.Processor);
        await processors.updateProcessor(req.params.id, req.body);
        return res.status(204).send("OK");
    } catch (err) {
        console.log(err)
        return res.status(500).send(`Interval Server Error!${err}`)
    }
};
const UpdatePartial = async(req, res) => {
    try {
        await validator.validate(req.body, validator.ProcessorPartial);
        await processors.updateProcessor(req.params.id, req.body);
        return res.status(204).send("OK");
    } catch (err) {
        console.log(err)
        return res.status(500).send(`Interval Server Error!${err}`)
    }
};
const Delete = async(req, res) => {
    try {
        await processors.removeProcessor(req.params.id);
        return res.status(204).send("Deleted!")
    } catch (err) {
        console.log(err)
        return res.status(500).send(`Interval Server Error!${err}`)
    }
};

module.exports = {
    getAll,
    getOneProcessor,
    Create,
    Update,
    UpdatePartial,
    Delete
};