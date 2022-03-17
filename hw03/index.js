const express = require("express");

const api = express();

api.use(express.json());

api.get('/api/cars', cars.getAll);
api.get('/api/cars/:id', cars.getOne);
api.post('/api/cars', cars.create);
api.put('/api/cars/:id', cars.update);
api.patch('/api/cars/:id', cars.updatePartial);
api.delete('/api/cars/:id', cars.remove);



api.listen(8080, err => {
    if (err) return console.log(err);
    return console.log("Server UP!")
})