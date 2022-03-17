const files = require('../files');
const DATA_SOURCE = `${__dirname}/../../data`;

const addBike = async(bike) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        data.push(bike);
        await files.writeData(data, DATA_SOURCE);
    } catch (err) {
        throw err;
    }
};
const removeBike = async(index) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        let out = data.filter((_, i) => index !== i);
        await files.writeData(out, DATA_SOURCE);
    } catch (err) {
        throw err;
    }
};
const updateBike = async(index, bike) => {
    try {
        let data = await files.readData();
        let out = data.map((b, i) => {
            if (index === i) {
                b = bike
            }
            return b;
        });
        await files.writeData(out, DATA_SOURCE)
    } catch (err) {
        throw err;
    }
};
const getAllBikes = async() => {
    try {
        let data = await files.readData(DATA_SOURCE);
        return data;
    } catch (err) {
        throw err;
    }
};
const getBikeByIndex = async(index) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        return data[index]
    } catch (err) {
        throw err;
    }
};

module.exports = {
    addBike,
    removeBike,
    updateBike,
    getAllBikes,
    getBikeByIndex
}