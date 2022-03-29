const { rickAndMorty } = require('../pkg/rickandmorty/index')

const getCharacters = async(req, res) => {
    try {
        let characters = await rickAndMorty(req.params.character);
        return res.status(200).send(characters);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error!')
    }
};

const getEpisodes = async(req, res) => {
    try {
        let episodes = await rickAndMorty(req.params.episodes);
        return res.status(200).send(episodes);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error!')
    }
};

const getLocations = async(req, res) => {
    try {
        let locations = await rickandmorty(req.params.location);
        return res.status(200).send(locations);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error!')
    }
};

module.exports = {
    getCharacters,
    getEpisodes,
    getLocations,

}