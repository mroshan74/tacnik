const User = require('../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authenticateUser = (req,res,next) => {
    if(req.header('x-auth')){
        const token = req.header('x-auth')
        console.log(token)
        let tokenData
        try{
            tokenData = jwt.verify(token,process.env.JWT_SECRET)
            User.findOne({ _id: tokenData._id })
                .then(user => {
                    req.user = user
                    next()
                })
                .catch(err => res.json(err))
        }
        catch(e){
            res.json({ errors: e.message})
        }
    }else {
        res.json({ errors: 'token must be provided'})
    }
}

module.exports = authenticateUser