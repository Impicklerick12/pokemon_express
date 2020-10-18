const { getRandomNumberForPokeAPI, catchPokemon } = require('../utilities/pokemon_utilities')
const axios = require('axios');

const getPokemon = async (req, res) => {
    try {
        const newPokemon = await catchPokemon(req)
        res.status(200).send(newPokemon)
    } catch (error) {
        res.status(500).send({
            error
        })
    }

    // catchPokemon(req).save((err, post) => {
    //     if (err) {
    //         res.status(500);
    //         return res.json({
    //             error: err.message
    //         })
    //     } else {
    //         res.status(200);
    //         res.send(post)
    //     }
    // }) 
    
    
    // axios
    //     .get(`https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}`)
    //     .then(response => {
    //         pokemon = response.data
    //         // console.log(pokemon)

    //         let randomPokemon = new Object()
    //         randomPokemon.name = pokemon.name.capitalize()
    //         randomPokemon.type1 = `${pokemon.types[0].type === undefined ? "None" : pokemon.types[0].type.name.capitalize()}`
    //         randomPokemon.type2 = `${pokemon.types[1].type === undefined ? "None" : pokemon.types[1].type.name.capitalize()}`
    //         res.send(randomPokemon)
    //         // return randomPokemon
    //     })
    //     .catch(error => console.log(error))
}

// Show a single pokemon by its :id in DB
const showPokemon = (req, res) => {

}

// Show all pokemon we have caught
const showPokemonTeam = (req, res) => {

}

module.exports = {
    getPokemon,
    showPokemon,
    showPokemonTeam
}