const express = require('express');
const router = express.Router();

const { getPokemon } = require('../controllers/pokemon_controller')

router.get('/', getPokemon)




module.exports = router