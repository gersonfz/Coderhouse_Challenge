const express = require('express');
const infoController = require('../../controller/info.controller');

const router = express.Router();

router.get('/', infoController.getProcessInfo);

module.exports = router;