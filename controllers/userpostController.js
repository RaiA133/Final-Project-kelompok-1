const { User_post } = require('../models')

class userpostController {
  // membuat post baru
  static async createPost(req, res, next) {
    try {
      const { unique_id, post_img, post_title, post_desc, post_category, post_tags, post_deadline, post_pricing } = req.body;
      const data = await User_post.create({
        unique_id,
        post_img,
        post_title,
        post_desc,
        post_category,
        post_tags,
        post_deadline,
        post_pricing
      });
      res.status(201).json({
        status: 'Success',
        halaman: 'Post',
        message: 'Berhasil membuat post baru',
        data
      });
    } catch (err) {
      res.status(500).json({
        status: 'Failed',
        halaman: 'Post',
        message: err.message,
        error: err
      });
    }
  }

  // update postingan berdasarkan id yang login
  static async updatePost(req, res, next) {
    try {
      const { id } = req.params;
      const { unique_id, post_img, post_title, post_desc, post_category, post_tags, post_deadline, post_pricing } = req.body;
      const data = await User_post.update({
        unique_id,
        post_img,
        post_title,
        post_desc,
        post_category,
        post_tags,
        post_deadline,
        post_pricing
      }, {
        where: {
          id,
          unique_id: req.userData.unique_id
        }
      });
      if (data[0] === 0) {
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
          message: `Berhasil update post dengan id ${id}`,
          data
        });
      }
    } catch (err) {
      return res.status(500).json({
        status: 'Failed',
        halaman: 'Post',
        message: err.message,
        error: err
      });
    }
  }

  // hapus postingan berdasarkan id yang login
  static async deletePost(req, res, next) {
    try {
      const { id } = req.params;
      const data = await User_post.destroy({
        where: {
          id,
          unique_id: req.userData.unique_id
        }
      });
      if (data === 0) {
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
          message: `Berhasil hapus post dengan id ${id}`,
          data
        });
      }
    } catch (err) {
      return res.status(500).json({
        status: 'Failed',
        halaman: 'Post',
        message: err.message,
        error: err
      });
    }
  }
}

module.exports = UserPostController;
