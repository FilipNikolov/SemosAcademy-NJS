const mongoose = require('mongoose');

const Processor = mongoose.model(
    'processor', {
        cores: Number,
        threads: Number,
        manufacturer: String,
        model: String
    },
    'processor'
);

const addProcessor = async(processor) => {
    let r = new Processor(processor);
    return await r.save();
};
const removeProcessor = async(id) => {
    return await Processor.deleteOne({ _id: id });
};
const updateProcessor = async(id, processor) => {
    return await Processor.updateOne({ _id: id }, processor);
};
const getAllProcessors = async() => {
    return await Processor.find({});
};
const getOneProcessor = async(id) => {
    return await Processor.findOne({ _id: id });
};

module.exports = {
    addProcessor,
    removeProcessor,
    updateProcessor,
    getAllProcessors,
    getOneProcessor
};