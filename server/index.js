const express = require('express');

const axios = require('axios');
const mongoose = require("mongoose");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.port || 3000;

const pokemonRouter = require('./routes/pokemons_routes')

// Middleware that passes incoming data to json: instead of bodyparser
// Allows access to req.body
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const dbConn = 'mongodb://localhost/pokemon_express'
// Set three properties to avoid deprecation warnings:
// useNewUrlParser: true
// useUnifiedTopology: true
// useFileAndModify: false
mongoose.connect(dbConn, 
    {
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