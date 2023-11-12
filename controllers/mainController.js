require('dotenv').config();
const { User } = require('../models')
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");

class mainController {
  static healthCheck (req, res, next) {
    res.status(200).json({ message: 'Success' })
  }

  // halaman register
  static async register (req, res, next) {
    const { name, username, email, password } = req.body; 
    const hashedPassword = await bcrypt.hash(password, 10);
    
    Todo.create({
      name: name,
      username: username,
      email: email,
      password: hashedPassword,
    })
      .then(data => {
        res.status(201).json({ 
          status: 'Success',
          halaman: 'Register',
          message: 'Registrasi Berhasil!',
          data
        })
      })
      .catch(err => {
        res.status(500).json({ message: 'Something went wrong', error: err })
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
    .then(async data => {
      if (!data) {
        res.status(404).json({ message: 'Email Salah!' })
      } 
      const passwordMatch = await bcrypt.compare(password, data.password);
      if (!passwordMatch) {
        return res.status(400).json({ message: "Password Salah" });
      } else {
        const token = jwt.sign({ email }, secretKey, { expiresIn: process.env.JWT_EXPIRED_TIME });
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

  static async logout(req, res, next) {
    const { token } = req.headers.authorization;
    try {
      // Hapus sesi berdasarkan token
      await Session.destroy({ where: { token } });
  
      res.status(200).json({ message: 'Logout berhasil' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Gagal melakukan logout' });
    }
  }

}

module.exports = mainController
