const mongoose = require('mongoose')
require('dotenv').config()

const configureDB = () => {
    let url = process.env.DB_LOCAL
    if (process.env.NODE_ENV === 'production'){
        url ='mongodb+srv://tacnik:tacnikdb@cluster0.wurp1.mongodb.net/tecnik-int-db?retryWrites=true&w=majority' 
    }
    mongoose.connect(url,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(() => {
            console.log('connected to tecnik...')
        })
        .catch(err => console.log((err)))
}

module.exports = configureDB