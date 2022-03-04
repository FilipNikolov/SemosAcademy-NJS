const fs = require("fs");
const express = require("express");

const readData = (source) => {
    return new Promise((success, fail) => {
        fs.readFile(`${source}.json`, 'utf8', (err, data) => {
            if (err) return fail(err);
            let out = JSON.parse(data);
            return success(out);
        });
    });
};

const writeData = (data, destination) => {
    return new Promise((success, fail) => {
        let out = JSON.stringify(data);
        fs.writeFile(`${destination}.json`, out, err => { // ./user.json
            if (err) return fail(err);
            return success();
        });
    });
};
const addPerson = async(firstName, lastName) => {
    try {
        let person = {
            first_name: firstName,
            last_name: lastName
        };
        let data = await readData('./data')
        data.push(person);
        await writeData(data, './data')
    } catch (err) {
        throw err;
    }
};

const removePerson = async(index) => {
    try {
        let data = await readData('./data');
        let out = data.filter((_, i) => index !== i);
        await writeData(out, './data');
    } catch (err) {
        throw err;
    }
};
// (async() => {
//     try {
//         await writeData([], './data');

//         await addPerson('Pero', 'Perovski');
//         await addPerson('Ivan', 'Ivanovski');
//         await addPerson('Janko', 'Jankovski');
//         await addPerson('Stanko', 'Stankovski');

//         let data = await readData('./data');
//         console.log(data);

//         await removePerson();

//         // let data2 = await readData('./data');
//         // console.log(data2);
//     } catch (err) {
//         console.log(err);
//     }
// })();

const api = express();

api.use(express.json());

api.get('/users', async(req, res) => {
    try {
        let data = await readData('./data');
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server ERROR!")
    }
});

api.post('/users', async(req, res) => {

});

const PORT = 8080;

api.listen(PORT, err => {
    if (err) return console.log(err);
    console.log("Server running on 8080!")
})