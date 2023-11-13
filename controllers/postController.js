require('dotenv').config();
const { User_post } = require('../models')

class profileController {

  // halaman ADMIN | GET all data user ( middlewares : JWT is authenticated )
  static getPost(req, res, next) {
    console.log(User_post)
    User_post.findAll()
      .then(data => {
        res.status(200).json({
          status: 'Success',
          halaman: 'Home',
          message: 'Berhasil GET all Data User_posts',
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
}

module.exports = profileController