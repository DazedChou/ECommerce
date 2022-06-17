const router = require('express').Router();
const path = require('path');
const { User, Product, Order } = require('../models');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
})

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
});
module.exports = router;