const express = require("express");
const bikes = require('./handlers/bikes');

const api = express();

api.use(express.json());

api.get('/api/bikes', bikes.getAll);
api.get('/api/bikes/:id', bikes.getOne);
api.post('/api/bikes', bikes.create);
api.put('/api/bikes/:id', bikes.update);
api.patch('/api/bikes/:id', bikes.updatePartial);
api.delete('/api/bikes/:id', bikes.remove);


api.listen(10000, err => {
    if (err) return console.log(err);
    return console.log('Server is up, on PORT 1000!')
});