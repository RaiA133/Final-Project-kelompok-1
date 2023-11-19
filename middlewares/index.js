const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const { User } = require('../models')
const secretKey = process.env.JWT_SECRET || 'defaultSecretKey'; 

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      status: 'Failed',
      halaman: 'Middleware JWT',
      message: 'Token Belum Dimasukan.'
    });
  }

  await User.findOne({
    where: {
      remember_token: token
    }
  })
  .then(user => {
    // console.log(user.dataValues)
    if (!user) {
      return res.status(401).json({
        status: 'Failed',
        halaman: 'Middleware JWT',
        message: 'Anda Belum Login.'
      });
    }
    else {
      jwt.verify(token, secretKey, (err, decoded) => {
        // console.log(token)
        if (err) {
            return res.status(401).json({ 
              status: 'Failed',
              halaman: 'Middleware JWT',
              message: 'Sesi Login Berakhir.'
            });
        }
        // Proses Decoded Token dari authController.login, diteruskan ke semua controller
        req.userData = decoded;
        next();
    });
    }
  })
  .catch(err => {
    return res.status(500).json({
      status: 'Something went wrong',
      halaman: 'Middleware JWT',
      error: err
    });
  });
};

const isAdminCheck = async (req, res, next) => {
  const { user_role_id } = req.userData
  console.log(user_role_id)
  if (user_role_id == 1) {
    next();
  }
  else {
    return res.status(403).json({
      status: 'Failed',
      halaman: 'Middleware Admin',
      message: 'Anda tidak memiliki izin untuk mengakses halaman ini.'
    });
  };
};

module.exports = { verifyToken, isAdminCheck, route }; 