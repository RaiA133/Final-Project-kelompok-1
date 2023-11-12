const { User } = require('../models')

class profileController {
  static getProfile(req, res, next) {
    const id = req.params.id;
    User.findByPk(id)
      .then(data => {
        res.status(200).json({
          status: 'Success',
          data,
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'Something went wrong',
          error: err
        })
      })
  }

  static updateProfile(req, res, next) {
    const id = req.params.id;
    const { name, username, email, img_profile, birth_date, birth_place, about, company, job, country, address, contact, web_link, github_link, fb_link, ig_link } = req.body;
    User.update({ name, username, email, img_profile, birth_date, birth_place, about, company, job, country, address, contact, web_link, github_link, fb_link, ig_link }, { where: { id } })
      .then(data => {
        res.status(200).json({
          status: 'Success',
          message: 'Profile updated',
          data,
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'Something went wrong',
          error: err
        })
      })
  }
}

module.exports = profileController