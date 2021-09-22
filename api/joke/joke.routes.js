const express = require('express')
const { getJokes } = require('./joke.controller')
const { log } = require('../../middlewares/logger.middleware')

const router = express.Router()

router.get('/', log, getJokes)

module.exports = router