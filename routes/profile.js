const express = require('express')
const route = express.Router()
const app = express()
const userController = require('../controllers/userController')
const middlewares = require('../middlewares') 
const path = require('path')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/img/users')
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, Date.now() + '-' + fileName);
    }
})

const upload = multer({
  storage: storage, limits: { fileSize: 2000000 } // 2MB limit
});

route.get('/profile', middlewares.verifyToken, userController.getUserById)
route.put('/profile/update', middlewares.verifyToken, upload.single('file'), (req, res, next) => {
  const fileName = req.file.filename;
  userController.updateProfile(req, res, next, fileName); // mengirim nama file yg sama ke userController.updateProfile
});


module.exports = route