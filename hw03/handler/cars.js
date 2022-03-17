const cars = require("../pkg/cars")
const getAll = async(req, res) => {
    try {
        let cs = await cars.getAllCars();
        return res.status(200).send(cs)
    } catch (err) {
        console.log(err);
        return res.status(500).send("internal server error")
    }
};
const getOne = async(req, res) => {

    try {
        let cs = await cars.getOne(Number(req.params.id));
        return res.status(200).send(cs)
    } catch (err) {
        console.log(err);
        return res.status(500).send("internal server error")
    }
};
const create = async(req, res) => {
    try {
        await cars.addCar(req.body);
        return res.status(201).send(req.body)
    } catch (err) {
        console.log(err);
        return res.status(500).send("internal server error")
    }
};
const update = async(req, res) => {
    try {
        let cs = await cars.updateCar(Number(req.params.id), req.body);
        return res.status(204).send("Ok")
    } catch (err) {
        console.log(err);
        return res.status(500).send("internal server error")
    }
};
const remove = async(req, res) => {
    try {
        let cs = await cars.removeCar(Number(req.params.id));
        return res.status(204).send("Ok")
    } catch (err) {
        console.log(err);
        return res.status(500).send("internal server error")
    }
};


module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove
}