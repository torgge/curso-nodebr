const {readFile} = require('fs')
const {promisify} = require('util')

const readFileAsync = promisify(readFile)

class Database {

    constructor() {
        this.NOME_ARQUIVO = `herois.json`
    }

    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, `utf8`)
        return JSON.parse(arquivo.toString())
    }

    async escreverArquivo() {

    }


    async listar(id) {
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => (id ? item.id) )
        return null
    }
}

module.exports = new Database()
