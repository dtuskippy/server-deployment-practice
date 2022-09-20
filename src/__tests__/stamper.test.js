'use strict';

//need to bring some stuff in...mock the server, file we're going to test
//could do unit test...when testing logger, how do I test that a console.log happened and logged correctly....?  how do I spy on console?

const supertest = require('supertest');
const { app } = require('../server');
const request = supertest(app);

describe('Stamper Middleware', async ()=>{
  it('works as expected', ()=> {
    const response = await request.get('/pet');

    expect(response.time).toBeTruthy();
    //went to jest methods....for what follows time. immediately above
    //it or test......works
    expect(response.time).toBeDefined();
    

  });
});

