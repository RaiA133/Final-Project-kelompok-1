const route = require('express').Router()
const userController = require('../controllers/userController')
const middlewares = require('../middlewares') 

route.get('/profile', middlewares.verifyToken, userController.getUserById)
route.put('/profile/update', middlewares.verifyToken, userController.updateProfile)


module.exports = route