const db = require('../config/connection');
const { User, Product } = require('../models');
const productSeeds = require('./productSeeds');

db.once('open', async () => {
    try{
        await Product.deleteMany();
        await User.deleteMany();
        await Product.create(productSeeds);
    } catch(err){
        console.log(err);
    }
    console.log('all done!');
    process.exit(0);
})