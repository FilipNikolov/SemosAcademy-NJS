const mongoose = require("mongoose");

const Car = mongoose.model(
    'cars', {
        model: String,
        manufacturer: String,
        year: Number
    },
    'cars'

)

const addCar = async(car) => {
    let c = new Car(Car);
    return await c.save();
};

const removeCar = async(id) => {
    return await car.deleteOne({ _id: id });
};

const updateCar = async(id, car) => {
    return await Car.updateOne({ _id: id }, car);
};

const getAllCars = async() => {
    return await car.find();
};

const getOne = async(id) => {
    return await car.findOne({ _id: id })
};

module.exports = {
    addCar,
    removeCar,
    updateCar,
    getAllCars,
    getOne
};