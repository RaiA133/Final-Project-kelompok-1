const route = require('express').Router()
const chatController = require('../controllers/chatController')
const middlewares = require('../middlewares')

route.post('/chat/find-or-create', middlewares.verifyToken, chatController.createUserChat)
// route.get('/chat/find-all/:chat_unique_id', middlewares.verifyToken, chatController.findAllUserChats)
route.get('/chat/find-all', middlewares.verifyToken, chatController.findAllUserChats)
route.get('/chat/find/:userone_unique_id/:usertwo_unique_id', middlewares.verifyToken, chatController.findUserChat)

module.exports = route
