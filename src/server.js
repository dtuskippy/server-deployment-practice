'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const stamper = require('./middleware/stamper');

const PORT = process.env.PORT || 3002;

// design principle:  singleton
const app = express();

app.use(stamper);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.get('/pet', (req, res, next) => {
    let petName = req.query;
    console.log(petName);

    if(petName){
        res.status(200).send('This works');
    } else {

    }




});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start};


/**
 * JSDoc example
 * @param {string} name
 * @returns a greeting message
 */
function greet(name){
  return `Hello ${name}!`;
}

greet('Lucky');
