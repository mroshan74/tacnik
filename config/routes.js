const express = require('express')
const router = express.Router()

const authenticateUser = require('../app/middlewares/authentication')

const authControllers = require('../app/controllers/authControllers')

// user auth and state status routes
router.post('/users/register',authControllers.register)
router.post('/users/login',authControllers.login)

module.exports = router