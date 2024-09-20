const entityRoutes = require('express').Router()
const entityController = require('../controllers/entityController')

entityRoutes.get('/', entityController.getAllEntities)

module.exports = entityRoutes