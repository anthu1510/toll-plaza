const mongoose = require('mongoose');

const users = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    status: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    UpdatedAt: {type: Date, default: Date.now},
});


const userModel = mongoose.model('User', users);

module.exports = userModel;
