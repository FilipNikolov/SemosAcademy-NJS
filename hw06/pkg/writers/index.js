const mongoose = require('mongoose');

const Writer = mongoose.model(
    'writers', {
        first_name: String,
        last_name: String,
        year_of_birth: Number,
        books: Number,
        year_of_death: Number
    },
    'writers'
);
const addWriter = async(writers) => {
    let w = new Writer(writers);
    return await w.save();
};
const removeWriter = async(id) => {
    return await Writer.deleteOne({ _id: id });
};
const updateWriter = async(id, writers) => {
    return await Writer.updateOne({ _id: id }, writers);
};
const getAllWriters = async(req, res) => {
    return await Writer.find({});
};
const getOneWriter = async(id) => {
    return await Writer.findOne({ _id: id });
};

module.exports = {
    addWriter,
    removeWriter,
    updateWriter,
    getAllWriters,
    getOneWriter
};