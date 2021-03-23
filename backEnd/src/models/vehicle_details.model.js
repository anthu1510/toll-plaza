const mongoose = require('mongoose');

const vehicle = new mongoose.Schema({
    vehicleNo: {type: String, required: true},
    tripType: {type: String, default: 'single'},
    date: {type: Date, default: Date.now},
    time: {type: Date, default: Date.now},
    status: {type: String, default: 'active'},
    createdAt: {type: Date, default: Date.now},
    UpdatedAt: {type: Date, default: Date.now},
});


const vehicleModel = mongoose.model('Vehicle_detail', vehicle);

module.exports = vehicleModel;
