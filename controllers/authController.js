require('dotenv').config();
const { User } = require('../models')
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");

class authController {

  // halaman register
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
        status: 'failed',
        message: 'Email atau Username Sudah Terdaftar',
        error: err.message
      });
    }
  }

  // halaman login
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
            message: 'Email Salah atau Tidak Terdaftar!'
          });
        }
        const passwordMatch = await bcrypt.compare(password, data.password);
        if (!passwordMatch) {
          return res.status(400).json({
            status: 'Failed',
            message: `Password Salah untuk email : ${data.email}`
          });
        }
        else {
          const token = jwt.sign({
            // apa saya yang bisa dijadikan jwt, nantinya bisa di decoded untuk digunakan sebagai data WHERE ketika get data
            id: data.id,
            unique_id: data.unique_id,
            email
          }, secretKey, { expiresIn: process.env.JWT_EXPIRED_TIME });

          data.update({ remember_token: token }) // update data token ke database
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
          status: 'Something went wrong',
          error: err
        });
      });
  }

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
            message: 'Token Salah atau Anda Belum Login!'
          });
        }
        else {
          data.update({ remember_token: null }) // update data token ke database
          return res.status(200).json({
            status: 'Success',
            halaman: 'Logout',
            message: 'Anda Berhasil Logout',
          });
        }
      })
      .catch(err => {
        return res.status(500).json({
          status: 'Something went wrong',
          error: err
        });
      });
  }
}

module.exports = authController