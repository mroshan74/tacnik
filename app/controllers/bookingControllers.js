const Booking = require('../models/booking')
const bookingControllers = {}

bookingControllers.list = (req,res) => {
    Booking.find({user: req.user._id})
        .then(books => {
            res.json(books)
        })
        .catch(err => res.json(err))
}

bookingControllers.create = (req,res) => {
    const {body} = req
    console.log(req.user)
    body.user = req.user._id
    const booking = new Booking(body)
    booking.save()
        .then(book => {
            res.json(book)
        })
        .catch(err => res.json(err))
}

module.exports = bookingControllers