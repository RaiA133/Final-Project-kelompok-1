require('dotenv').config();
const { User } = require('../models')
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY || 'defaultSecretKey';

class mainController {
  static healthCheck (req, res, next) {
    res.status(200).json({ message: 'Success' })
  }

  // halaman register
  static register (req, res, next) {
    res.status(200).json({ 
      status: 'Success', 
      halaman: 'Register'
    })
  }

  // halaman login
  static login (req, res, next) {
    const { email, password } = req.body
    User.findOne({
      where: {
        email: email,
        password: password
      }
    })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'Email atau Password Salah!' })
      } else {
        const token = jwt.sign({ email }, secretKey, { expiresIn: '300s' });
        res.status(200).json({ 
          status: 'Success', 
          halaman: 'Login', 
          message: 'Anda Berhasil Login', 
          token 
        })
      }
    })
    .catch(err => {
      res.status(500).json({ 
        status: 'Something went wrong', 
        error: err 
      })
    })
  }

  // halaman all data user ( cek penggunaan middleware yg dikirim dari routes/home.js )
  static index (req, res, next) {
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
