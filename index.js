const express = require('express');
const axios = require('axios');
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const pokemonRouter = require('./server/routes/pokemon_routes')

const dbConn = 'mongodb://localhost/pokemon_express'
// Set three properties to avoid deprecation warnings:
// useNewUrlParser: true
// useUnifiedTopology: true
// useFileAndModify: false
mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database!');
        }
    });

// Home page
app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>')
})

// Pokemon routes
app.use('/pokemon', pokemonRouter);

const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port)
})

module.exports = {
    app,
    server
}