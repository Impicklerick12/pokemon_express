const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Home page')
})

// Testing route
app.get('/jsonResponseRoute', (req, res) => {
    res.json({
        message: "Hello world!"
    });
});

app.get('/pokemon', (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
        pokemon = response.data
        console.log(pokemon)
        res.send(pokemon)
    })
    .catch(error => console.log(error))

})

app.listen(port, () => {
    console.log('Listening at http://localhost:' + port)
})

module.exports = {
    app
}