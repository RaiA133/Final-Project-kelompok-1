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
          const token = jwt.sign({ email }, secretKey, { expiresIn: process.env.JWT_EXPIRED_TIME });
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
  
  static async logout(req, res, next) {
    try {
      const token = req.headers.authorization;
      console.log(token)
      if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
      }
      await Session.destroy({ where: { token } });
      res.status(200).json({ message: 'Logout berhasil' });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Gagal melakukan logout' });
    }
  }
}

module.exports = authController