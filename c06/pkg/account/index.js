const res = require('express/lib/response');
const mongoose = require('mongoose');

const Account = mongoose.model(
    'accounts', {
        email: String,
        password: String,
        fullname: String,
    },
    'accounts'

);

const Create = async(acc) => {
    let a = new Account(acc);
    return await a.save();
};
const getById = async(id) => {
    return await Account.find({ _id: id });
};
const getByEmail = async(email) => {
    return await Account.findOne({ email })
};
const getAll = async() => {
    return await Account.find({});
};
const Update = async(id, acc) => {
    return await Account.updateOne({ _id: id }, acc);
};
const Remove = async(id, acc) => {
    return await Account.deleteOne({ _id: id });
}

module.exports = {
    Create,
    getById,
    getByEmail,
    getAll,
    Update,
    Remove
};