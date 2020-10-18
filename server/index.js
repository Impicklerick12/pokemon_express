const express = require('express');

const axios = require('axios');
const mongoose = require("mongoose");
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

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

app.use( bodyParser.urlencoded({extended : true }));
app.use( bodyParser.json() );

app.engine('handlebars', exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  }));
app.set('view engine', 'handlebars');
app.set('views', (__dirname + '/views'));

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

// mongoose.connect(
//     process.env.MONGO_URI,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false
//     },
//     err => {
//       if (err) {
//         console.log('err:', err);
//       } else {
//         console.log('MongoDB connected')
//       }
//     }
//   );

// Home page
app.get('/', (req, res) => {
    res.render('home')
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