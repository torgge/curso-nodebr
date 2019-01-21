const { ok, deepEqual } = require("assert")
const database = require("./database")

const DEFAULT_ITEM_CADASTRADO = { nome: "Flash", poder: "Speed", id: 1 }

describe(`Suite de manipulação de Herois`, () => {
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRADO)
  })

  it(`Deve pesquisar um heroi usando arquivos...`, async () => {
    const expected = DEFAULT_ITEM_CADASTRADO
    const resultado = await database.listar(expected.id)
    ok(resultado, expected)
  })

  it("Deve pesquisar um heroi usando arquivo e o conteúdo deve ser igual ao esperado", async () => {
    const expected = DEFAULT_ITEM_CADASTRADO
    //"Destructuring" ==> Define o primeiro item do array resultado, [resultado] ao invés de resultado[0]
    const [resultado] = await database.listar(expected.id)
    deepEqual(resultado, expected)
  })

  it(`Deve cadastrar um novo herói e verificar se o mesmo foi inserido`, async () => {
    const expected = { nome: "Batman", poder: "Forca", id: 1548032159248 }
    const resultList = await database.cadastrar(expected)
    const [actual] = resultList.filter(item => item.id == expected.id)

    console.log(`expected`, expected)
    console.log(`actual`, actual)
    // console.log(`actual`, actual)

    deepEqual(actual, expected)
  })

  it.only(`Deve remover um heroi por id`, async () => {
    const expected = true
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRADO.id)
    deepEqual(resultado, expected)
  })

  // it('Deve cadastrar um heroi, usando arquivo', async () => {
  //     const expected = {}
  //
  //     ok(null, expected)
  // })
})
