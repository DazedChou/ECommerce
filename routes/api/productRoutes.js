const router = require("express").Router();
const path = require("path");
const { User, Product, Order } = require("../../models");

router.get('/', (req, res) => {
    try {
        const products = Product.find({});
        res.json(products);  
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;