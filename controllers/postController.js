require('dotenv').config();
const { User_post } = require('../models')

class postController {

  // halaman POST PEKERJAAN | GET all data user_posts ( middlewares : JWT | login needed )
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

  // halaman POST PEKERJAAN | GET all data user_posts by category, from params url ( middlewares : JWT | login needed )
  static getPostByCategory(req, res, next) {
    const { post_category } = req.params;
    User_post.findOne({
      where: {
        post_category
      }
    })
      .then(data => {
        if (!data) {
          return res.status(404).json({
            status: 'Failed',
            halaman: 'Post',
            message: 'Data Post Tidak Ditemukan!'
          });
        }
        else {
          return res.status(200).json({
            status: 'Success',
            halaman: 'Post',
            message: `Kategori Postingan Berdasarkan ${data.post_category}`,
            data
          });
        }
      })
      .catch(err => {
        return res.status(500).json({
          status: 'Failed',
          halaman: 'post',
          message: 'Something went wrong',
          error: err
        });
      });
  }
}

module.exports = postController