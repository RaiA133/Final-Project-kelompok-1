require('dotenv').config();
const { User } = require('../models')
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");

class authController {

  // halaman REGISTER | POST data user
  static async register(req, res, next) {
    try {
      const { name, username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        user_role_id: 2,
        unique_id: uuidv4(),
        name: name,
        username: username,
        email: email,
        password: hashedPassword,
      });

      res.status(201).json({
        status: 'Success',
        halaman: 'Register',
        message: 'Registrasi Berhasil!',
        data: newUser
      });
    } catch (err) {
      console.error('Registration error:', err);
      res.status(500).json({
        status: 'Failed',
        halaman: 'Register',
        message: 'Email atau Username Sudah Terdaftar',
        error: err.message
      });
    }
  }

  // halaman LOGIN | GET, POST & UPDATE data user
  static login(req, res, next) {
    const { email, password } = req.body
    User.findOne({
      where: {
        email: email
      }
    })
      .then(async data => {
        if (!data) {
          return res.status(404).json({
            status: 'Failed',
            halaman: 'Login',
            message: 'Email Salah atau Tidak Terdaftar!'
          });
        }
        const passwordMatch = await bcrypt.compare(password, data.password);
        if (!passwordMatch) {
          return res.status(400).json({
            status: 'Failed',
            halaman: 'Login',
            message: `Password Salah untuk email : ${data.email}`
          });
        }
        else {
          const token = jwt.sign({ // data yang di encoded jadi JWT, diteruskan ke middleware JWT : middlewares/index.js
            id: data.id,
            unique_id: data.unique_id,
            email
          }, secretKey, { expiresIn: process.env.JWT_EXPIRED_TIME });

          data.update({ remember_token: token }) // UPDATE data token ke database
          return res.status(200).json({
            status: 'Success',
            halaman: 'Login',
            message: 'Anda Berhasil Login',
            token
          });
        }
      })
      .catch(err => {
        return res.status(500).json({
          status: 'Failed',
          halaman: 'Login',
          message: 'Something went wrong',
          error: err
        });
      });
  }

  // halaman LOGOUT | GET & UPDATE data user
  static logout(req, res, next) {
    const { id, unique_id, email } = req.userData;
    User.findOne({
      where: {
        unique_id
      }
    })
      .then(data => {
        if (!data) {
          return res.status(404).json({
            status: 'Failed',
            halaman: 'Logout',
            message: 'Token Salah atau Anda Belum Login!'
          });
        }
        else {
          data.update({ remember_token: null }) // UPDATE to NULL data token ke database
          return res.status(200).json({
            status: 'Success',
            halaman: 'Logout',
            message: 'Anda Berhasil Logout',
          });
        }
      })
      .catch(err => {
        return res.status(500).json({
          status: 'Failed',
          halaman: 'Logout',
          message: 'Something went wrong',
          error: err
        });
      });
  }
}

module.exports = authController