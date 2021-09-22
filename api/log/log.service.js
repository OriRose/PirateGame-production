const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function add(log) {
    try {
        // peek only updatable fields!
        const logToAdd = {
            IP: log.IP,
            action: log.action,
            timestamp: Date.now()
        }
        const collection = await dbService.getCollection('logs')
        await collection.insertOne(logToAdd)
        return logToAdd;
    } catch (err) {
        logger.error('cannot insert log', err)
        throw err
    }
}

module.exports = {
    add
}