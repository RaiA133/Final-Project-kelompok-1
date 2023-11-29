const route = require('express').Router()
const chatController = require('../controllers/chatController')
const userController = require('../controllers/userController')
const middlewares = require('../middlewares')

route.post('/chats/find-or-create', middlewares.verifyToken, chatController.createUserChat)
route.get('/chats/find-all', middlewares.verifyToken, chatController.findAllUserChats) // tambah /:chat_unique_id jika ingin pakai params
route.get('/chats/find/:userone_unique_id/:usertwo_unique_id', middlewares.verifyToken, chatController.findUserChat)

route.post('/messages', middlewares.verifyToken, chatController.createMessage)
route.get('/messages/find-all/:chat_unique_id', middlewares.verifyToken, chatController.getMessage) // tambah /:chat_unique_id jika ingin pakai params

route.get('/user/all', middlewares.verifyToken, userController.getUser) // tambah /:chat_unique_id jika ingin pakai params
route.get('/user/all/:unique_id', middlewares.verifyToken, userController.getUserByUniqueId) // tambah /:chat_unique_id jika ingin pakai params

module.exports = route
