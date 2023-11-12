const profileController = require('../controllers/profileController')

route.get('/profile/:id', profileController.getProfile)
route.put('/profile/:id', profileController.updateProfile)
