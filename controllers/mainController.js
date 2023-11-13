class mainController {
  // halaman HEALTH-CHECK | Testing Routes
  static healthCheck(req, res, next) {
    res.status(200).json({
      status: 'Success',
      halaman: 'Health-check',
      message: 'Routes berjalan dengan baik',
    })
  }
}

module.exports = mainController
