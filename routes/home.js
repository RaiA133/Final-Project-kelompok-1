const route = require('express').Router()
const mainController = require('../controllers/mainController')

route.get('/health-check', mainController.healthCheck)

module.exports = route
