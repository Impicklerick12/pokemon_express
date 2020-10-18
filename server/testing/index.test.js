// Supertest is basically Postman for your tests - get hyped!
const supertest = require('supertest');

// Import your app - note the destructuring syntax.
// That will pull "app" as a standalone variable out of 
// the "exports" object from our index.js file.
const { app, server } = require('../index')

const mongoose = require('mongoose');
const dbName = "pokemonTest";
const request = supertest(app);
const Pokemon = require('../models/pokemon');
const testData = require('./testData.json')

beforeAll(async (done) => {
    //closes the dev database collection before all the tests
    await mongoose.connection.close()
  
    // sets up a new database for testing
    const url = `mongodb://localhost/${dbName}`
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  
    // seeds the database with starting pokemons
    for (let i = 0; i < testData.length; i++) {
      const pokemon = testData[i]
      const defaultPokemon = new Pokemon(pokemon)
      await defaultPokemon.save(err => {
        if (err) {
          console.error(err)
        }
      })
    }
    
    done()
})
  
// Handle the done() callback and force the NodeJS process to close
// as it hangs open forever when you do server-related stuff in Jest
// "afterAll" is a magic built-in Jest function that will run when
// all tests & test suites have finished running.
afterAll(async (done) => {

    // Force our server reference to close:
    server.close();

    // Dumb hack to trick Jest into waiting a bit more before 
    // it freaks out over processes hanging open. 
    // Potentially because server.close() does not complete instantly? Not sure.
    // This has been an issue for ExpressJS & Jest devs 
    // for several years & solutions are vague.
    await new Promise(resolve => setTimeout(() => resolve(), 500));

    // deletes the collection pokemons from the test database
    // TODO - uncomment below to clear collection after all tests
    await Pokemon.deleteMany({})

    // closes the test database collection after all tests
    await mongoose.connection.close()


    // Resolve the done() callback? Again not sure, as solutions are vague.
    done();
})

// Homepage test
describe('Home page route exists', () => {
    it('Should exist', async (done) => {
        const res = await request.get('/');
        expect(res.statusCode).toEqual(200);
        done()
    });
});

// Testing route
// describe('Can get JSON data from specific routes', () => {
//     // Example of checking response body for keys, but not their values
//     it('should have the message propety', async () => {
//         const res = await request(app).get('/jsonResponseRoute');
//         expect(res.body).toHaveProperty('message');
//     })

//     // Example of checking the response body for specific values
//     it('should show "Hello world!" from the message property', async () => {
//         const res = await request(app).get('/jsonResponseRoute');
//         expect(res.body.message).toEqual("Hello world!");
//     })
// })

// Testing pokemon API call
describe('Gets a random pokemon from PokeAPI', () => {
    it('should find a pokemon name', async (done) => {
        const res = await request.get('/catch')
        expect(res).toBeTruthy()
        done()
    })
})