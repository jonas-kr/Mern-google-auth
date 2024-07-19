const { userRegister } = require('../controllers/userController')
const  authMiddleware  = require('../middlewares/authMiddleware')

const router = require('express').Router()



router.get("/", authMiddleware, userRegister)

module.exports = router