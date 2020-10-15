// Supertest is basically Postman for your tests - get hyped!
const request = require('supertest');

// Import your app - note the destructuring syntax.
// That will pull "app" as a standalone variable out of 
// the "exports" object from our index.js file.
var {app} = require('../index');

// Homepage test
describe('Home page route exists', () => {
    it('Should exist', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
    });
});

// Testing route
describe('Can get JSON data from specific routes', () => {
    // Example of checking response body for keys, but not their values
    it('should have the message propety', async () => {
        const res = await request(app).get('/jsonResponseRoute');
        expect(res.body).toHaveProperty('message');
    })

    // Example of checking the response body for specific values
    it('should show "Hello world!" from the message property', async () => {
        const res = await request(app).get('/jsonResponseRoute');
        expect(res.body.message).toEqual("Hello world!");
    })
})

// Testing pokemon API call
describe('Can get JSON data from PokeApi', () => {
    it('should have a results property', async () => {
        const res = await request(app).get('/pokemon')
        expect(res.body).toHaveProperty('results')
    });
    it('should find the first pokemon name', async () => {
        const res = await request(app).get('/pokemon')
        expect(res.body.results[0].name).toEqual('bulbasaur')
    })
})