const config = require('./pkg/config');
require('./pkg/db');
const express = require('express');
const proccesors = require('./handlers/processors');


const api = express();
api.use(express.json());

api.get('/api/processors', proccesors.getAll);
api.get('/api/processors/:id', proccesors.getOneProcessor);
api.post('/api/processors', proccesors.Create);
api.put('/api/processors/:id', proccesors.Update);
api.patch('/api/processors/:id', proccesors.UpdatePartial);
api.delete('/api/processors/:id', proccesors.Delete);

api.listen(config.get('service').port, err => {
    if (err) return console.log(err);
    return console.log(`Server started on port ${config.get('service').port}`)
})