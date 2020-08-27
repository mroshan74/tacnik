const User = require('../models/user')
require('dotenv').config()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authControllers = {}

authControllers.register = (req,res) => {
    const { body } = req
    const user = new User(body)
    user.save()
        .then(user => {
            res.json({
                _id: user._id,
                username: user.phone,
            })
        })
        .catch(err => {
            res.status(400).json({
                ok: false,
                message: 'Unable create User',
                ...err
            })
        })
}

authControllers.login = (req,res) => {
    const { body } = req
    User.findOne({ phone: body.phone })
        .then(user => {
            if(!user){
                res.status(400).json({
                    ok: false,
                    message: 'Invalid email or password'
                })
            }
            else{
                bcryptjs.compare(body.password, user.password)
                    .then(match => {
                        if(match){
                            const tokenData = {
                                _id: user._id,
                                email: user.phone,
                            }
                            const token = jwt.sign(tokenData, process.env.JWT_SECRET)
                            res.json({
                                token,
                                user: {
                                    ...tokenData
                                }
                            })
                        }
                        else{
                            res.status(422).json({
                                ok: false,
                                message: 'Invalid email or password'
                            })
                        }
                    }).catch(err => {
                        res.status(400).json({
                            ok: false,
                            message: 'Operation Failed',
                            ...err
                        })
                    })
            }
        }).catch(err => {
            res.status(400).json({
                ok: false,
                message: 'Operation Failed',
                ...err
            })
        })
}

module.exports = authControllers