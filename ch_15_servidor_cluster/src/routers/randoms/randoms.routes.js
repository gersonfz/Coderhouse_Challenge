const express = require('express');
const randomController = require('../../controller/random.controller');

const router = express.Router();

router.get('/', randomController.getRandoms);

module.exports = router;