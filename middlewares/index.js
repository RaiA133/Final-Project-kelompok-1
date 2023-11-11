const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'defaultSecretKey'; 

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
      return res.status(401).json({ 
        status: 'failed',
        message: 'Anda Belum Login.'
      });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
          return res.status(401).json({ 
            status: 'failed',
            message: 'Sesi Login Berakhir.'
          });
      }
      // Token valid, menyimpan data pengguna ke dalam objek req untuk digunakan di handler selanjutnya
      req.userData = decoded;
      next();
  });
};

module.exports = { verifyToken, route }; 