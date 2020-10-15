const axios = require('axios');
const catchPokemon = require('../utilities/utils')

const getPokemon = (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
        pokemon = response.data.results.map(pokemon => pokemon.name)
        // console.log(pokemon)
        res.send(pokemon)
    })
    .catch(error => console.log(error))
}

module.exports = {
    getPokemon
}