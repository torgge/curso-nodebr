const service = require('./service')

Array.prototype.meuMap = function(callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length - 1; indice++) {
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}

async function main() {
    try {
        const results = await service.obterPessoas(`a`)
        //   const names = []
        //   results.results.forEach((item) => {
        //       names.push(item.name)
        //   })

        //   results.results.map((pessoa)=> {
        //     return pessoa.name
        //   })

        // const names = results.results.map((pessoa) => pessoa.name)

        const names = results.results.meuMap((pessoa, indice) => {
            return `[${indice}] ${pessoa.name}`
        })
        console.log(`Names`, names)
    } catch (error) {
        console.error(`DEU RUIM`, error)
    }
}

main()