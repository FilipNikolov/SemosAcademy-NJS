const config = require('./pkg/config');
const express = require('express');
const jwt = require('express-jwt');
const fileUpload = require('express-fileupload');
const storage = require('./handlers/storage');

const api = express();

api.use(jwt({
    algorithms: ['HS256'],
    secret: config.get('service').jwt_key
}));

api.use(fileUpload());

api.post('/api/v1/storage', storage.upload);
api.get('/api/v1/storage/:filename', storage.download);

api.listen(config.get('service').port, err => {
    if (err) return console.log(Err);
    console.log(`Server started on ${config.get('service').port}`);

});