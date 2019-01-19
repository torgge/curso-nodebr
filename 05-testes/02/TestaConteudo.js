const {obterPessoas} = require('./service')
const assert = require('assert')


describe(`Deve testar o conteúdo do JSON`, function () {
    it('Deve validar o nome correto Darth Vader', async () => {
        const expected = [{name: `Darth Vader`}]
        const {results} = await obterPessoas(`Darth Vader`)
        const resultado = []
        results.map((item) => {
            return {name: item.name}
        }).forEach((item) => {
            resultado.push(item)
            console.log(`Item--->`, item.name)
        })

        assert.deepEqual(resultado, expected)
    });
})