const path = require('path');
const { fork } = require('child_process');
const { successResponse } = require('../utils/api.utils')

class RandomController {
    getRandoms(req, res, next) {
        try {
            const { qty } = req.query
            const computoRandoms = fork(
                path.resolve(__dirname, '../utils/computoRandom.js')
            );
            computoRandoms.send(qty || 100000000)
            computoRandoms.on('message', data => {
                const response = successResponse(data)
                res.json(response)
            })
        }
        catch (error) {
            next(error)
        }
    }
}

module.exports = new RandomController();