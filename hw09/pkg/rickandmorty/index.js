const fetch = require('node-fetch');
const config = require('../config');

const API_URL = 'https://rickandmortyapi.com/api';
const CACHE = {};

const rickAndMorty = async(movie, id) => {
    let now = new Date().getTime() / 1000;

    if (CACHE[movie] && now < CACHE[movie].timestamp + config.get('rickandmorty').cache_expiery) {
        return CACHE[movie];
    }


    let URL = `${API_URL}/${movie}`;
    try {
        let res = await fetch(URL);
        let data = await res.json();

        CACHE[movie] = {
            timestamp: new Date().getTime() / 1000,
            data
        };

        return data;
    } catch (err) {
        throw err;
    }

};

module.exports = {
    rickAndMorty
}