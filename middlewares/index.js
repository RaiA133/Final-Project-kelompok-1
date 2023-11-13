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
    if (!user) {
      return res.status(401).json({
        status: 'Failed',
        halaman: 'Middleware JWT',
        message: 'Anda Belum Login.'
      });
    }
    else {
      jwt.verify(token, secretKey, (err, decoded) => {
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
      halaman: 'Middleware JWT',
      status: 'Something went wrong',
      error: err
    });
  });

  
};

module.exports = { verifyToken, route }; 