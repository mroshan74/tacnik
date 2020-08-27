const mongoose = require('mongoose')

const Schema = mongoose.Schema
const bookingSchema = new Schema({
    booked: {
        type: Date,
        default: Date.now
    },
    bookTime: {
        type: String,
        default: '9:00 AM'
    },
    bookedFor: {
        type: Number,
        default: 1,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps: true})

const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking