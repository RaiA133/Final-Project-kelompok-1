const route = require('express').Router()
const adminController = require('../controllers/adminController')
const middlewares = require('../middlewares') 

route.get('/administrator', middlewares.verifyToken, middlewares.isAdminCheck, adminController.getUser)
route.delete('/administrator/:unique_id', middlewares.verifyToken, middlewares.isAdminCheck, adminController.deleteUserByUniqueId)

module.exports = route
