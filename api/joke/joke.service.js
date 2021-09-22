const dbService = require('../../services/db.service')

async function query() {
    try {
        const collection = await dbService.getCollection('jokes')
        const jokes = await collection.find({}).toArray()
        return jokes
    } catch (err) {
        logger.error('cannot find jokes', err)
        throw err
    }
}

module.exports = {
    query
}