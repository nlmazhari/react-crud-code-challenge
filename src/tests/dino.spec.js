// I researched on how to write tests for functions inside a class component
// I came up with this solution calles rewire, but unfortunately I had no luck with it
// anyway, just to share the approach, it should work like this:

// const someFunction = require('./index.js').__get__('someFunction');
// describe('someFunction', () => {
//     it('should work', () => {
//         expect(someFunction()).toEqual('anything');
//     });
// });

// this is just a sample: just writing this to show I know some basics
// I know there's so much to learn for me in writing tests
// and I know, in api calls, it makes more sense to check the request or the things u do with resp
// I mean, unit tests instead of integrating test

import addDino from './actions'
describe('addDino', () => {
    it('adds a new dino', async () => {
        const resp = await addDino('Tyrannosaurus')
        expect(resp).toBeDefined()
        expect(resp.data.data.attributes.name).toEqual('Tyrannosaurus')
    })
})