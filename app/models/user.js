const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')
const bcryptjs = require('bcryptjs')

const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        minlength: 3,
        maxlength: 64,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function(value){
                return isEmail(value)
            },
            message: function(){
                return 'invalid Email format'
            }
        }
    },
    password: {
        type: String,
        minlength: 4,
        maxlength: 64,
        required: true
    },
    role: {
        type: Number,
        default: 0
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