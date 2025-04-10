const mongoose = require('mongoose')
const dataModel = new mongoose.Schema({nome: { type: String, required: true}})
const itensModel = mongoose.model('Itens', dataModel)

class Itens {

    static lista = []
    
    constructor(nome) {
        this.nome = nome
        this.error = []
        this.item = null
    }

    async adicionarItens() {
        if(!this.nome || this.nome.trim().length == 0 || typeof this.nome !== 'string') {
            this.error.push('Nome inválido')
            return
        }

        Itens.lista.push(this.nome)
        this.item = await itensModel.create({nome: this.nome})
    }

    static async listarItens() {
        return await itensModel.find()
    }

    static async excluirItens(id) {
        console.log("id recebido:", id)
        console.log("Tipo do id:", typeof id)

        const item = await itensModel.findOneAndDelete({ _id: id})
        if(!item) {
            throw new Error("Item não encontrado")
        }
        return item
    }
}

module.exports = Itens
