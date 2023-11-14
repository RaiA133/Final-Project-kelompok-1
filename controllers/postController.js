require('dotenv').config();
const { User_post } = require('../models')

class postController {

  // halaman POST PEKERJAAN | GET all data user_posts ( middlewares : JWT | login needed )
  static getPost(req, res, next) {
    // console.log(User_post)
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

  // halaman POST PEKERJAAN | GET Yours all data user_posts ( middlewares : JWT | login needed )
  static getYourPost(req, res, next) {
    const { unique_id } = req.userData; // hasil decoded dari middleware verifyToken    
    User_post.findAll({
      where: {
        unique_id
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
            message: `Semua Postinganmu Berdasarkan ${data.post_category}`,
            data
          });
        }
      })
      .catch(err => {
        return res.status(500).json({
          status: 'Failed',
          halaman: 'Post',
          message: 'Something went wrong',
          error: err
        });
      });
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
          halaman: 'Post',
          message: 'Something went wrong',
          error: err
        });
      });
  }

  // halaman POST PEKERJAAN | GET all data user_posts by tags, from params url ( middlewares : JWT | login needed )
  static getPostByTags(req, res, next) {
    const { post_tags } = req.params;
    User_post.findOne({
      where: {
        post_tags
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
            message: `Kategori Postingan Berdasarkan ${data.post_tags}`,
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

  // halaman POST PEKERJAAN | GET all data user_posts by terbaru, from params url ( middlewares : JWT | login needed )
  static getPostByTerbaru(req, res, next) {
    
    User_post.findAll({
      order: [ [ 'id', 'DESC' ]],
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
            message: `Kategori Postingan Berdasarkan id terbaru/terbesar`,
            data,
            
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

  // halaman POST PEKERJAAN | GET all data user_posts by terlama, from params url ( middlewares : JWT | login needed )
  static getPostByTerlama(req, res, next) {
    
    User_post.findAll({
      order: [ [ 'id', 'ASC' ]],
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
            message: `Kategori Postingan Berdasarkan id terlama/terkecil`,
            data,
            
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