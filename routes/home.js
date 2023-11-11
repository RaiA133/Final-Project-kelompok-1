const route = require('express').Router()
const mainController = require('../controllers/mainController')
const middlewares = require('../middlewares') 

route.get('/health-check', mainController.healthCheck)
route.get('/', middlewares.verifyToken, mainController.index)

module.exports = route
