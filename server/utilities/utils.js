const axios = require('axios')

const catchPokemon = function (req) {
    return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}`)
        .then(response => {
            pokemon = response.data
            // console.log(pokemon)

            let randomPokemon = new Object()
            randomPokemon.name = pokemon.name.capitalize()
            randomPokemon.type1 = `${pokemon.types[0].type ? pokemon.types[0].type.name.capitalize() : "None"}`
            randomPokemon.type2 = `${pokemon.types[1] ? pokemon.types[1].type.name.capitalize() : "None"}`
            randomPokemon.image = pokemon.sprites.front_default
            // res.send(randomPokemon)
            console.log(randomPokemon)
            return randomPokemon
        })
        .catch(error => console.log(error))
}

function getRandomNumberForPokeAPI() {
    // Find a number between 1 and 151 (original pokemon)
    let suitableNumber = Math.floor(Math.random() * 152);
    return suitableNumber;
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

module.exports = {
    catchPokemon,
    getRandomNumberForPokeAPI,

}