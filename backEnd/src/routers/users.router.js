const express = require('express');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const router = express.Router();

const UserModel = require('../models/users.model');

router.get('/',(req, res) => {
    res.send('Get user');
});

router.get('/:id',async (req, res) => {
    const existingUser = await UserModel.findOne({_id: req.params.id});
    if(existingUser){
        res.send(existingUser);
    } else {
        res.send('No user data there');
    }
});

router.post('/login',async (req, res) => {
    const existingUser = await UserModel.findOne({email: req.body.email ? req.body.email : ''});
    if(existingUser){
        const verifyPassword = passwordHash.verify(req.body.password, existingUser.password);
        if(verifyPassword){
            const token = jwt.sign({id: existingUser._id}, process.env.ACCESS_TOKEN_SECRET);
            res.send({status: true, token});
        } else {
            res.send('Password is not Matched...');
        }
    } else {
        res.send('Email is not Registered...');
    }
});

router.post('/', async (req, res) => {

    const users = new UserModel({
        name: req.body.name ? req.body.name : '',
        email: req.body.email ? req.body.email : '',
        password: req.body.password ? passwordHash.generate(req.body.password) : '',
        status: req.body.name ? req.body.name : ''
    });

    const rs = await users.save();

    if(rs){
        res.send('Added');
    } else {
        res.send('Not Added');
    }
});

router.put('/',(req, res) => {

});

router.delete('/',(req, res) => {

});

module.exports = router;
