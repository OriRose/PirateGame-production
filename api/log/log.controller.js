const logger = require('../../services/logger.service')
const logService = require('./log.service')

async function addLog(req, res) {
    try {
        var log = req.body
        log = await logService.add(log)
        res.send(log)

    } catch (err) {
        console.log(err)
        logger.error('Failed to add log', err)
        res.status(500).send({ err: 'Failed to add log' })
    }
}

module.exports = {
    addLog
}