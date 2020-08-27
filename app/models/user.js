const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const Schema = mongoose.Schema
const userSchema = new Schema({
    phone: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 10,
    },
    password: {
        type: String,
        minlength: 4,
        maxlength: 64,
        required: true
    }
},{timestamps: true})

userSchema.pre('save', function(next){
    bcryptjs.genSalt()
        .then(salt => {
            bcryptjs.hash(this.password, salt)
                .then(encrypted => {
                    this.password = encrypted
                    next()
                })
                .catch(err => {
                    return Promise.reject(err)
                })
        })
        .catch(err => {
            return Promise.reject(err)
        })
})

const User = mongoose.model('User', userSchema)
module.exports = User