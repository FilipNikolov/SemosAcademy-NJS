const config = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const jwt = require('express-jwt');
const auth = require('./handlers/auth');

const api = express();

api.use(express.json());
api.use(jwt({
    secret: config.get('service').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        '/api/v1/auth/login',
        '/api/v1/auth/register',
        '/api/v1/auth/forgot-password',
        '/api/v1/auth/reset-password'
    ]
}));

api.post('/api/v1/auth/login', auth.login);
api.post('/api/v1/auth/register', auth.register);
api.get('/api/v1/auth/refresh-token', auth.refreshToken);
api.post('/api/v1/auth/forgot-password', auth.forgotPassword);
api.post('/api/v1/auth/reset-password', auth.resetPassword);

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('invalid token...');
    }
});

api.listen(config.get('service').port, err => {
    if(err) return console.log(err);
    console.log(`Server started on port ${config.get('service').port}`);
});


// ********************************** //
// ********************************** //
// !!!FRONT-END CODE!!! //
// try {
//     let sendData = {
//         some_thing: 'something'
//     };

//     let res = await fetch(
//         'http://localhoslt:10000/api/v1/some-endpoint',
//         {
//             method: 'POST',
//             body: JSON.stringify(sendData),
//             headers: {
//                 'Authorization': `Bearer ${jw_token}`,
//                 'Content-Type': 'application/json'
//             }
//         }
//     );

//     let data = await res.json();
//     console.log(data);
// } catch(err) {
//     console.log(err);
// }
// ********************************** //
// ********************************** //