const axios = require('axios')

const catchPokemon = function (req) {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
        pokemon = response.data.results.map(pokemon => pokemon.name)
        console.log(pokemon)
        return pokemon
    })
    .catch(error => console.log(error))
}

module.exports = {
    catchPokemon
}