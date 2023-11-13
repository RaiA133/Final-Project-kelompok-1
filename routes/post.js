const route = require('express').Router()
const postController = require('../controllers/postController')
const middlewares = require('../middlewares') 

route.get('/post', middlewares.verifyToken, postController.getPost)

module.exports = route