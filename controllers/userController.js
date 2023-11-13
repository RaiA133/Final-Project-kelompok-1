require('dotenv').config();
const { User } = require('../models')

class profileController {

  // halaman ADMIN | GET all data user ( middlewares : JWT is authenticated )
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

  // halaman PROFILE | GET data user by id ( middlewares : JWT is authenticated )
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
          status: 'Failed',
          halaman: 'Profile',
          message: 'Anda Belum Login (token false)!'
        });
      }
      else {
        return res.status(200).json({
          status: 'Success',
          halaman: 'Profile',
          message: 'Anda Berhasil Masuk Ke Profile',
          data
        });
      }
    })
    .catch(err => {
      return res.status(500).json({
        status: 'Failed',
        halaman: 'Profile',
        message: 'Something went wrong',
        error: err
      });
    });
  }

  // halaman EDIT PROFILE | UPDATE data user by id ( middlewares : JWT is authenticated )
  static updateProfile(req, res, next) {
    const { id } = req.userData; // hasil decoded dari middleware verifyToken
    const { 
      name, username, email, 
      img_profile, birth_date, 
      birth_place, about, company, 
      job, country, address, contact, 
      web_link, github_link, fb_link, ig_link 
    } = req.body;
    const updatedUser = {
      name, username, email, 
      img_profile, birth_date, 
      birth_place, about, company, 
      job, country, address, contact, 
      web_link, github_link, fb_link, ig_link 
    }
    User.findByPk(id)
      .then(data => {
        if (!data) {
          res.status(404).json({ 
            status: 'Failed',
            halaman: 'Profile',
            message: 'Data Tidak Ditemukan!' 
          })
        } else {
          data.update(updatedUser)
          res.status(200).json({ 
            status: 'Success',
            halaman: 'Profile',
            message: 'Data Berhasil Diupdate!',
            data: updatedUser
          })
        }
      })
      .catch(err => {
        res.status(500).json({ 
          status: 'Failed',
          halaman: 'Profile',
          message: 'Something went wrong', 
          error: err 
        })
      })
  }
}

module.exports = profileController