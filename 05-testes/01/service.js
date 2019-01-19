const { get } = require(`axios`)

const URL = `https://swapi.co/api/people`

async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`
  const result = await get(url)
  // console.log(result.data)
  return result.data.results.map(mapearPessoa)
}

function mapearPessoa(item) {
  return { nome: item.name, peso: item.height }
}

module.exports = { obterPessoas };