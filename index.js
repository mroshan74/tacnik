const express = require('express')
const app = express()
const port = process.env.PORT || 8300
const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

const configureDB = require('./config/database')
configureDB()

const routes = require('./config/routes')
app.use('/api',routes)

//deploy
const path = require('path')
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

app.listen(port, () => {
    console.log('SERVER LISTENING AT --->',port)
})