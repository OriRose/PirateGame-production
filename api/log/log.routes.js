const express = require('express')
const { addLog } = require('./log.controller')
const { log } = require('../../middlewares/logger.middleware')

const router = express.Router()

router.post('/', log, addLog)

module.exports = router