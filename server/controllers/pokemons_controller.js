const { getAllPokemons, getPokemonById, getRandomNumberForPokeAPI, catchPokemon } = require('../utilities/pokemon_utilities')
const axios = require('axios');

// Show all pokemon we have caught
const showPokemonTeam = async (req, res) => {
    try {
        const pokemons = await getAllPokemons()
        // console.log(pokemons)
        res.status(200).send(pokemons)
      } catch (error) {
        res.status(500).send({
          error
        })
      }
}

// Catch a random pokemon by making api call, saving it to DB
const getPokemon = async (req, res) => {
    try {
        const newPokemon = await catchPokemon()
        // console.log({newPokemon})
        // const pokemon = {}
        // for (let key in newPokemon) {
        //   pokemon[key] = newPokemon[key]
        // }
        // res.status(200).render('pokemon/catch', { newPokemon })
        res.status(200).render('pokemon/catch', { newPokemon })
    } catch (error) {
        res.status(500).send({
            error
        })
    }

    // catchPokemon(req).save((err, pokemon) => {
    //     if (err) {
    //         res.status(500);
    //         return res.json({
    //             error: err.message
    //         })
    //     } else {
    //         res.status(200);
    //         res.send(pokemon)
    //     }
    // })
}

// Show a single pokemon by its :id in DB
const showPokemon = async (req, res) => {
    try {
        const pokemon = await getPokemonById(req)
        // console.log(pokemons)
        res.status(200).send(pokemon)
      } catch (error) {
        res.status(500).send({
          error
        })
      }
}

module.exports = {
    getPokemon,
    showPokemon,
    showPokemonTeam
}