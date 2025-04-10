const express = require('express')
const route = express.Router()
const path = require('path') //para renderizar páginas estáticas
const itemcontrollers = require('./controllers/itemcontroller')

route.get('/', itemcontrollers.index)

route.get('/item', (req, res) => {res.render('item')})
route.post('/novoitem', itemcontrollers.criarItem)
route.get('/item/delete/:id', itemcontrollers.excluir)

module.exports = route