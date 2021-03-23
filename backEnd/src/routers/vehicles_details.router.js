const express = require('express');
const router = express.Router();

const VehicleModel = require('../models/vehicle_details.model');

router.get('/',async (req, res) => {
    const existingVehicle = await VehicleModel.find({});
    res.send(existingVehicle);
    if(existingVehicle){

    } else {
        res.send('No vehicle data there');
    }
});

router.get('/:id',async (req, res) => {
    const existingVehicle = await VehicleModel.findOne({_id: req.params.id});
    if(existingVehicle){
        res.send(existingVehicle);
    } else {
        res.send('No vehicle data there');
    }
});

router.post('/', async (req, res) => {

    const vehicle = new VehicleModel({
        vehicleNo: req.body.vehicleNo ? req.body.vehicleNo : '',
        tripType: req.body.tripType ? req.body.tripType : ''
    });

    const rs = await vehicle.save();

    if(rs){
        res.send('Vehicle Added');
    } else {
        res.send('Vehicle Not Added');
    }
});

router.put('/',(req, res) => {

});

router.delete('/',(req, res) => {

});

module.exports = router;
