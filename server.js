const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path');
const { json } = require('stream/consumers');
require('dotenv').config()

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(routes)

app.listen(port, () => {
    mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
        console.log('servidor rodando acesse http://localhost:3000')
    }).catch(e => console.log(e))
    
})