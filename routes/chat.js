const route = require('express').Router()
const chatController = require('../controllers/chatController')
const middlewares = require('../middlewares')

route.post('/chat/find-or-create', middlewares.verifyToken, chatController.createUserChat)
route.get('/chat/find-all', middlewares.verifyToken, chatController.findAllUserChats) // tambah /:chat_unique_id jika ingin pakai params
route.get('/chat/find/:userone_unique_id/:usertwo_unique_id', middlewares.verifyToken, chatController.findUserChat)

route.post('/messages', middlewares.verifyToken, chatController.createMessage)
route.get('/messages/find-all/:chat_unique_id', middlewares.verifyToken, chatController.getMessage) // tambah /:chat_unique_id jika ingin pakai params

module.exports = route
