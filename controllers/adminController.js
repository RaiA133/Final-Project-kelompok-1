require('dotenv').config();
const { User } = require('../models')

class adminController {
  // halaman ADMIN | GET all data user ( middlewares : JWT | login needed )
  static getUser(req, res, next) {
    User.findAll()
      .then(data => {
        res.status(200).json({
          status: 'Success',
          halaman: 'Home',
          message: 'Berhasil GET all Data Users',
          data,
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'Failed',
          halaman: 'Home',
          message: 'Something went wrong',
          error: err
        })
      })
  }
  
  // halaman ADMIN | DELETE data user by unique_id ( middlewares : JWT | login needed )
  static deleteUserByUniqueId(req, res, next) {
    const { unique_id } = req.params; // hasil decoded dari middleware verifyToken
    User.destroy({
      where: {
        unique_id,
      }
    })
      .then(data => {
        if (!data) {
          return res.status(404).json({
            status: 'Failed',
            halaman: 'Administrator',
            message: [
              'Anda Belum Login!',
              'Data Tidak ada'
            ]
          });
        }
        else {
          return res.status(200).json({
            status: 'Success',
            halaman: 'Administrator',
            message: `Data User Berhasil Dihapus`,
          });
        }
      })
      .catch(err => {
        return res.status(500).json({
          status: 'Failed',
          halaman: 'Administrator',
          message: 'Something went wrong',
          error: err
        });
      });
  }
}

module.exports = adminController