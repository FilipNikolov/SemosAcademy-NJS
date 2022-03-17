const config = require('./pkg/config');
require('./pkg/db');
const express = require('express');
const books = require('./handlers/books');
const writers = require('./handlers/writers');

const api = express();
api.use(express.json());

api.get('/api/books', books.getAll);
api.get('/api/books/:id', books.getOneBook);
api.post('/api/books', books.Create);
api.put('/api/books/:id', books.Update);
api.patch('/api/books/:id', books.UpdatePartial);
api.delete('/api/books/:id', books.Delete);

api.get('/api/writers', writers.getAll);
api.get('/api/writers/:id', writers.getOneWriter);
api.post('/api/writers', writers.Create);
api.put('/api/writers/:id', writers.Update);
api.patch('/api/writers/:id', writers.UpdatePartial);
api.delete('/api/writers/:id', writers.Delete);

api.listen(config.get('service').port, err => {
    if (err) return console.log(err);
    return console.log(`Server started on port ${config.get('service').port}`)
});