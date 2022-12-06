const { successResponse } = require('../utils/api.utils')
const { getProcessInfo } = require('../utils/process.utils.js')

class infoController {
    getProcessInfo(req, res, next) {
        try {
            const processInfo = getProcessInfo()
            const response = successResponse(processInfo)
            res.json(response)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new infoController()