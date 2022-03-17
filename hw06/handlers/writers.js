const writers = require('../pkg/writers');
const validator = require('../pkg/writers/validate');

const getAll = async(req, res) => {
    try {
        let ws = await writers.getAllWriters();
        return res.status(200).send(ws);
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error ${err}!`)
    }
};
const getOneWriter = async(req, res) => {
    try {
        let ws = await writers.getOneWriter(req.params.id);
        return res.status(200).send(ws)
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error ${err}!`)
    }
};
const Create = async(req, res) => {
    try {
        await validator.validate(req.body, validator.Writer);
        let ws = await writers.addWriter(req.body);
        return res.status(204).send(ws);
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error ${err}!`)
    }
};
const Update = async(req, res) => {
    try {
        await validator.validate(req.body, validator.Writer);
        await writers.updateWriter(req.params.id, req.body);
        return res.status(204).send("Ok");
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error ${err}!`)
    }
};
const UpdatePartial = async(req, res) => {
    try {
        await validator.validate(req.body, validator.WriterPartial);
        await writers.updateWriter(req.params.id, req.body);
        return res.status(204).send("Ok");
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error ${err}!`)
    }
};
const Delete = async(req, res) => {
    try {
        await writers.removeWriter(req.params.id);
        return res.status(204).send("Deleted!")
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error ${err}!`)
    }
};

module.exports = {
    getAll,
    getOneWriter,
    Create,
    Update,
    UpdatePartial,
    Delete
};