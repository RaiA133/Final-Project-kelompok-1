const route = require('express').Router()
const mainController = require('../controllers/mainController')

route.get('/register', mainController.register)
route.post('/login', mainController.login)

module.exports = route
