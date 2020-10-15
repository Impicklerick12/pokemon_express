const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Pokemon Schema
const Pokemon = new Schema({
    name: {
        type: String,
        required: true,
    },
    type1: {
        type: String,
        required: true
    },
    type2: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Pokemon", Pokemon)