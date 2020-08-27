const express = require('express')
const router = express.Router()

const authenticateUser = require('../app/middlewares/authentication')

const authControllers = require('../app/controllers/authControllers')
const bookingControllers = require('../app/controllers/bookingControllers')

// user auth and state status routes
router.post('/users/register',authControllers.register)
router.post('/users/login',authControllers.login)

router.get('/users/bookings',authenticateUser, bookingControllers.list)
router.post('/users/bookings/create', authenticateUser, bookingControllers.create)

module.exports = router