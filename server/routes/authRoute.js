const { register, google, login, logout } = require('../controllers/authController')

const router = require('express').Router()

router.post('/register', register)
router.post('/login', login)
router.post('/google', google)
router.get('/logout', logout)

module.exports = router