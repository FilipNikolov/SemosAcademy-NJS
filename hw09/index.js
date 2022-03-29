const config = require('./pkg/config');
const express = require('express');
const rickandmorty = require('./handlers/rickandmorty');

const api = express();

api.use(express.json());

api.get('/api/v1/rickandmorty/:character', rickandmorty.getCharacters);
api.get('/api/v1/rickandmorty/:episode', rickandmorty.getEpisodes);
api.get('/api/v1/rickandmorty/:location', rickandmorty.getLocations);
// api.get('/api/v1/rickandmorty/:character/:id', rickandmorty.getSingleCharacter)

api.listen(config.get('service').port, err => {
    if (err) return console.log(err);
    return console.log('Server stared on port', config.get('service').port, '!')
})