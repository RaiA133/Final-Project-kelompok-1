const { User } = require('../models')

class mainController {
  static healthCheck (req, res, next) {
    res.status(200).json({ message: 'Success' })
  }

  static index (req, res, next) {
    User.findAll()
      .then(data => {
        res.status(200).json({ data, message: 'Success', halaman: 'Home' })
      })
      .catch(err => {
        res.status(500).json({ message: 'Something went wrong', error: err })
      })
  }

  static register (req, res, next) {
    res.status(200).json({ message: 'Success', halaman: 'Register' })
  }

  static login (req, res, next) {
    res.status(200).json({ message: 'Success', halaman: 'Login' })
  }

}

module.exports = mainController
