const express = require('express');
const router = express.Router();

const { getPokemon, showPokemon , showPokemonTeam } = require('../controllers/pokemons_controller')

router.get('/catch', getPokemon)

router.get('/team', showPokemonTeam)

router.get('/:id', showPokemon)





module.exports = router