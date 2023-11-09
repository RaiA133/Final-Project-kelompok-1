const route = require('express').Router()
const mainController = require('../controllers/mainController')

route.get('/health-check', mainController.healthCheck)
route.get('/', mainController.index)

module.exports = route
