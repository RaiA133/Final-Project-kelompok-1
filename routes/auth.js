const route = require('express').Router()
const mainController = require('../controllers/mainController')

route.get('/register', mainController.register)
route.get('/login', mainController.login)

module.exports = route
