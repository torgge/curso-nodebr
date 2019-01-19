const { obterPessoas } = require('./service')

Array.prototype.meuFilter = function(callback) {
    const novoArray = []
    for (const item of this) {
        const result = callback(item, this.indexOf(item), this)
        if (!result) continue;
        novoArray.push(item)
    }    
    return novoArray
}

async function main() {
    try {
        const {results} = await obterPessoas(`a`)
        // const familiaLars = results.filter((item) => {
        //     //por padrao precisa retornar booleano
        //     //para informar se deve manter ou remover da lista
        //     //false > remove da lista
        //     //true > mantem
        //     //não encontrou = -1
        //     //encontrou = posicao no array
        //     const result = item.name.toLocaleLowerCase().indexOf(`lars`) !== -1
        //     return result
        // })

        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index} tamanho: ${lista.length}`)
            return item.name.toLocaleLowerCase().indexOf('lars') !== -1
        })


        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)
    } catch (error) {
        console.error(`Deu ruim `, error)
    }
}

main()