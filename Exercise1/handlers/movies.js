const movies = require("../pkg/movies/index");

const getAll = async(req, res) => {
    try {
        let ms = await movies.getAllMovies();
        return res.status(200).send(ms);
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal server error!")
    }
};
const getOne = async(req, res) => {
    try {
        let ms = await movies.getOne(Number(req.params.id));
        return res.status(200).send(ms);
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal server error!")
    }
};
const create = async(req, res) => {
    try {
        await movies.addMovie(req.body);
        return res.status(201).send(req.body)
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal server error!")
    }
};
const update = async(req, res) => {
    try {
        await movies.updateMovie(Number(req.params.id), req.body);
        return res.status(204).send("")
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal server error!")
    }
};
const updatePartial = async(req, res) => {

    return res.status(200).send('ok');
};
const remove = async(req, res) => {
    try {
        await movies.removeMovie(Number(req.params.id));
        return res.status(204).send("")
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal server error!")
    }
};


module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove
}