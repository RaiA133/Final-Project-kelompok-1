const route = require('express').Router()
const mainController = require('../controllers/mainController')

route.post('/register', mainController.register)
route.post('/login', mainController.login)
route.post('/logout', mainController.logout)

module.exports = route
