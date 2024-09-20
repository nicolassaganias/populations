const staticRoutes = require('express').Router()
const staticController = require('../controllers/staticController')

staticRoutes.get('/', staticController.index)

module.exports = staticRoutes