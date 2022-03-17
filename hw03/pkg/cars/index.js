const DATA_SOURCE = `${__dirname}../../data`


const addCar = async() => {
    try {
        let data = await readData(DATA_SOURCE);
        data.push(car);
        await writeData(data, DATA_SOURCE);
    } catch (err) {
        throw err;
    }
};

const removeCar = async(index) => {
    try {
        let data = await readData(DATA_SOURCE);
        let out = data.filter((_, i) => index !== i);
        await writeData(out, DATA_SOURCE);
    } catch (err) {
        throw err;
    }
};

const updateCar = async(index, car) => {
    try {
        let data = await readData(DATA_SOURCE);
        let out = data.map((c, i) =>
            if { index !== i });
        await writeData(out, DATA_SOURCE);
    } catch (err) {
        throw err;
    }
};

const getAllCars = async() => {
    try {
        let data = await readData(DATA_SOURCE);
        return data;
    } catch (err) {
        throw err;
    }
};
const getCarByIndex = async(index) => {
    try {
        let data = await readData(DATA_SOURCE);
        return data(index);
    } catch (err) {
        throw err;
    }
};



module.exports = {
    addCar,
    removeCar,
    updateCar,
    getAllCars,
    getCarByIndex
}