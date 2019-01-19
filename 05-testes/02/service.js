const { get } = require('axios')


const URL = `https://swapi.co/api/people`

async function obterPessoas(name) {
    const url = `${URL}/?search=${name}&format=json`
    const response = await get(url)

    return response.data
}

module.exports = { obterPessoas }