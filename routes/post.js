const route = require('express').Router()
const postController = require('../controllers/postController')
const middlewares = require('../middlewares') 

route.get('/post', middlewares.verifyToken, postController.getPost)
route.get('/post/category/:post_category', middlewares.verifyToken, postController.getPostByCategory)
route.get('/post/tags/:post_tags', middlewares.verifyToken, postController.getPostByTags)
route.get('/post/terbaru', middlewares.verifyToken, postController.getPostByTerbaru)
// route.get('/post/id', middlewares.verifyToken, postController.getPostById)

module.exports = route