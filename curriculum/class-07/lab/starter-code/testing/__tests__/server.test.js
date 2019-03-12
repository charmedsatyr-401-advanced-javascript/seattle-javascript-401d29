'use strict';

const supertest = require('supertest');

// What's up with the {}????
const {server} = require('../server.js');

const mockClient = supertest(server);

describe('The Server', () => {
  it('responds with a 200 on a good route', () => {
    // Why do we return here?
    return mockClient.get('/a')
      .then( result => {
        expect(result.status).toEqual(200);
      });
  });

  it('responds with a 500 on an error', () => {
  });

  it('responds with a 404 on an unknown route', () => {
  });
  
});
