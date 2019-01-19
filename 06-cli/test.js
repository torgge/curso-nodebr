const {
    ok,
    deepEqual
} = require('assert')
const database = require('./database')


const DEFAULT_ITEM_CADASTRADO = {nome: `Flash`, poder: `Speed`, id: 1}


describe(`Suite de manipulação de Herois`, () => {

    it(`Deve pesquisar um heroi usando arquivos...`, async () => {
        const expected = DEFAULT_ITEM_CADASTRADO
        const resultado = await database.listar(expected.id)
        ok(resultado, expected)
    })

    it('Deve pesquisar um heroi usando arquivo e o conteúdo deve ser igual ao esperado', async () => {
        const expected = DEFAULT_ITEM_CADASTRADO
        //"Destructuring" ==> Define o primeiro item do array resultado, [resultado] ao invés de resultado[0]
        const [resultado] = await database.listar(expected.id)
        deepEqual(resultado, expected)
    });

    // it('Deve cadastrar um heroi, usando arquivo', async () => {
    //     const expected = {}
    //
    //     ok(null, expected)
    // })
})
