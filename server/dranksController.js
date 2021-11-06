const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const apiKey = 9973533;

const dranks = {};

// API GET REQUESTS
dranks.getByName = (req, res, next) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.params.name}`)
      .then(data => data.json())
      .then(data => {
        res.locals.drinks = data;
        next();
      })
      .catch((err) => next({
        log: 'Express error handler caught error in getByName',
        status: 500,
        message: { err: `${err}` },
      }));
}

dranks.getByIngredients = (req, res, next) => {
    fetch(`htt[s://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=${req.params.ingredients}`)
      .then(data => data.json())
      .then(data => {
        res.locals.drinks = data;
        next();
      })
      .catch((err) => next({
        log: 'Express error handler caught error in getByIngredients',
        status: 500,
        message: { err: `${err}` },
      }));
}

dranks.getRandom = (req, res, next) => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php') 
      .then(data => data.json())
      .then(data => {
        res.locals.randomDrink = data;
        next();
      })
      .catch((err) => next({
        log: 'Express error handler caught error in getRandom',
        status: 500,
        message: { err: `${err}` },
      }));
}

dranks.getPopular = (req, res, next) => {
    fetch(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/popular.php`)
      .then(data => data.json())
      .then(data => {
        res.locals.popular = data;
        next();
      })
      .catch((err) => next({
        log: 'Express error handler caught error in getPopular',
        status: 500,
        message: { err: `${err}` },
      }));
}

dranks.getByCategory = (req, res, next) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.params.cat}`)
      .then(data => data.json())
      .then(data => {
        res.locals.drinks = data;
        next();
      })
      .catch((err) => next({
        log: 'Express error handler caught error in getByCategory',
        status: 500,
        message: { err: `${err}` },
      }));
}

dranks.getByGlass = (req, res, next) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${req.params.glass}`)
      .then(data => data.json())
      .then(data => {
        res.locals.drinks = data;
        next();
      })
      .catch((err) => next({
        log: 'Express error handler caught error in getByGlass',
        status: 500,
        message: { err: `${err}` },
      }));
}
// END API GET REQUESTS

module.exports = dranks;