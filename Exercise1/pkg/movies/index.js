const mongoose = require("mongoose");

const movies = mongoose.model(
    'movies', {
        name: String,
        premiere: Date,
        genre: String,
        actors: [
            String
        ],
        awards: [
            String
        ],
        director: String
    },
    'movies'

)

const addMovie = async(movies) => {
    let m = new Movie(movies);
    return await m.save();
};

const removeMovie = async(id) => {
    return await movies.deleteOne({ _id: id });
};

const updateMovie = async(id, movie) => {
    return await movies.updateOne({ _id: id }, movies);
};

const getAllMovies = async() => {
    return await movies.find();
};

const getOne = async(id) => {
    return await movies.findOne({ _id: id })
};

module.exports = {
    addMovie,
    removeMovie,
    updateMovie,
    getAllMovies,
    getOne
};