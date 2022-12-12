const express = require('express');
const productsRoutes = require('./products/products.routes');
const infoRoutes = require('./info/info.routes');
const randomsRoute = require('./randoms/randoms.routes')

const router = express.Router();

// api routes
router.use('/products', productsRoutes);
router.use('/info', infoRoutes);
router.use('/randoms', randomsRoute);

module.exports = router;