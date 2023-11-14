const route = require('express').Router()
const postController = require('../controllers/postController')
const middlewares = require('../middlewares') 

route.get('/post', middlewares.verifyToken, postController.getPost)
route.get('/post/mine', middlewares.verifyToken, postController.getYourPost)
route.get('/post/category/:post_category', middlewares.verifyToken, postController.getPostByCategory)
route.get('/post/tags/:post_tags', middlewares.verifyToken, postController.getPostByTags)
route.get('/post/terbaru', middlewares.verifyToken, postController.getPostByTerbaru)
route.get('/post/terlama', middlewares.verifyToken, postController.getPostByTerlama)


module.exports = route