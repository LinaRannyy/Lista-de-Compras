const { render } = require('ejs')
const Itens = require('./../models/itensModel')
const mongoose = require('mongoose')
const model = require('./../models/itensModel')

exports.criarItem = async function(req, res) {

    const newItem = new Itens(req.body.nome)

    await newItem.adicionarItens()

    if(newItem.error.length > 0) {
        res.status(400).json({error: newItem.error})
    } 
    
    res.redirect('/')

}

exports.index = async function(req, res) {
    // res.render('index', {lista: Itens.lista})
    try {
        const lista = await Itens.listarItens()
        res.render('index', { lista })
    } catch(e) {
        res.status(500).send("Erro no servidor")
    }
}

exports.excluir = async function(req, res) {
    try {
        const id = req.params.id
        console.log(typeof id)
        await Itens.excluirItens(id)
        res.redirect('/')

    } catch(e) {
        console.log(e)
        res.status(500).send(e)
    }
}