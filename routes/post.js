const route = require('express').Router()
const postController = require('../controllers/postController')
const middlewares = require('../middlewares') 

route.get('/post', middlewares.verifyToken, postController.getPost)
route.get('/post/category/:post_category', middlewares.verifyToken, postController.getPostByCategory)

module.exports = route