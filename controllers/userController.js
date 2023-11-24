require('dotenv').config();
const { User } = require('../models')

class profileController {

  // halaman PROFILE | GET data user by id ( middlewares : JWT | login needed )
  static getUserById(req, res, next) {
    const { unique_id } = req.userData; // hasil decoded dari middleware verifyToken
    User.findOne({
      where: {
        unique_id
      }
    })
      .then(data => {
        if (!data) {
          return res.status(404).json({
            status: [404, 'Failed'],
            halaman: 'Profile',
            message: [
              'Anda Belum Login !', 
              'token false'
            ]
          });
        }
        else {
          return res.status(200).json({
            status: [200, 'Success'],
            halaman: 'Profile',
            message: 'Berhasil Masuk Ke Profile',
            data
          });
        }
      })
      .catch(err => {
        return res.status(500).json({
          status: [500, 'Failed'],
          halaman: 'Profile',
          message: 'Something went wrong',
          error: err
        });
      });
  }

  // halaman EDIT PROFILE | UPDATE data user by id ( middlewares : JWT | login needed )
  static updateProfile(req, res, next, fileName) {
    const { unique_id } = req.userData; // hasil decoded dari middleware verifyToken

    const {
      name, username, email,
      img_profile, birth_date,
      birth_place, about, company,
      job, country, address, contact,
      web_link, github_link, fb_link, ig_link
    } = req.body;
    const file = fileName; // menerima filenya yg sama dengan apa yang di simpan di assets
    const updatedUser = {
      name, username, email,
      img_profile: file, birth_date,
      birth_place, about, company,
      job, country, address, contact,
      web_link, github_link, fb_link, ig_link
    }
    User.findOne({
      where: {
        unique_id
      }
    })
      .then(data => {
        if (!data) {
          res.status(404).json({
            status: [404, 'Failed'],
            halaman: 'Profile',
            message: 'Data Tidak Ditemukan!'
          })
        } 
        else {
          data.update(updatedUser)
          res.status(200).json({
            status: [200, 'Success'],
            halaman: 'Profile',
            message: 'Data Berhasil Diupdate!',
            data: updatedUser
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          status: [500, 'Failed'],
          halaman: 'Profile',
          message: 'Something went wrong',
          error: err
        })
      })
  }

  
}

module.exports = profileController