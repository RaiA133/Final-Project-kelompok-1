const { User } = require('../models')

class profileController {
  static getProfile(req, res, next) {
    const { id, unique_id, email } = req.userData; // hasil decoded dari middleware verifyToken
    User.findOne({
      where: {
        unique_id
      }
    })
    .then(data => {
      if (!data) {
        return res.status(404).json({
          status: 'Failed',
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
        status: 'Something went wrong',
        error: err
      });
    });
  }

  static updateProfile(req, res, next) {
    // const id = req.params.id;
    // const { name, username, email, img_profile, birth_date, birth_place, about, company, job, country, address, contact, web_link, github_link, fb_link, ig_link } = req.body;
    // User.update({ name, username, email, img_profile, birth_date, birth_place, about, company, job, country, address, contact, web_link, github_link, fb_link, ig_link }, { where: { id } })
    //   .then(data => {
    //     res.status(200).json({
    //       status: 'Success',
    //       message: 'Profile updated',
    //       data,
    //     })
    //   })
    //   .catch(err => {
    //     res.status(500).json({
    //       status: 'Something went wrong',
    //       error: err
    //     })
    //   })

    const { id } = req.userData;
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
          message: 'Something went wrong', 
          error: err 
        })
      })
  }
}

module.exports = profileController