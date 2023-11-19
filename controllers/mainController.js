class mainController {
  // halaman HEALTH-CHECK | Testing Routes
  static healthCheck(req, res, next) {
    res.status(200).json({
      status: [200, 'Success'],
      halaman: 'Health-check',
      message: 'Routes berjalan dengan baik',
    })
  }

  // halaman test token | Testing Routes
  static testSession(req, res, next) {
    try {
    res.status(200).json({
      status: [200, 'Success'],
      halaman: 'Test-Session-Login',
      message: 'Routes berjalan dengan baik',
    })
    }
    catch (error) {
      return res.status(401).json({ 
        status: 'Failed',
        halaman: 'Test-Session-login',
        message: 'Sesi Login Berakhir.',
        err: err.message
      });
    }
  }
}

module.exports = mainController
