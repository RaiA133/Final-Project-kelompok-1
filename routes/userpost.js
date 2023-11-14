const route = require('express').Router()
const UserPostController = require('../controllers/userpostController')
const middlewares = require('../middlewares') 

route.post('/post', middlewares.verifyToken, UserPostController.createPost)
route.put('/post/:id', middlewares.verifyToken, UserPostController.updatePost)
route.delete('/post/:id', middlewares.verifyToken, UserPostController.deletePost)

module.exports = route