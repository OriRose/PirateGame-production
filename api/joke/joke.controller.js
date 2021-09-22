const logger = require('../../services/logger.service')
const jokeService = require('./joke.service')

async function getJokes(req, res) {
    try {
        const jokes = await jokeService.query()
        res.send(jokes)
    } catch (err) {
        logger.error('Cannot get jokes', err)
        res.status(500).send({ err: 'Failed to get jokes' })
    }
}

module.exports={
    getJokes
}