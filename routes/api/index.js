const router = require('express').Router();

const cartRoutes = require('./cartRoutes');
const orderRoutes = require('./orderRoutes');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');

router.use('/cart', cartRoutes);
router.use('/orders', orderRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router; 