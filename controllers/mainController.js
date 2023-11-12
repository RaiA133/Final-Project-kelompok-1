require('dotenv').config();
const { User } = require('../models')
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");

class mainController {
  static healthCheck(req, res, next) {
    res.status(200).json({ message: 'Success' })
  }
  
  // halaman all data user ( cek penggunaan middleware yg dikirim dari routes/home.js )
  static index(req, res, next) {
    User.findAll()
      .then(data => {
        res.status(200).json({
          status: 'Success',
          halaman: 'Home',
          data,
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'Something went wrong',
          error: err
        })
      })
  }

}

module.exports = mainController
