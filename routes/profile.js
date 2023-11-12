const route = require('express').Router()
const profileController = require('../controllers/profileController')
const middlewares = require('../middlewares') 

route.get('/profile', middlewares.verifyToken, profileController.getProfile)
route.put('/profile/update', middlewares.verifyToken, profileController.updateProfile)

module.exports = route