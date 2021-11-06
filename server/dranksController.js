const fs = require('fs');
const path = require('path');
const apiKey = 9973533;

const dranks = {};

dranks.getByName = (req, res, next) => {
  try {
    fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.params.name}`)
      .then(data => data = res.locals.drinks)
      .then(next())
      .catch(err => next(err));
  } catch (err) {
    // throw to universal error handler
    next(err);
  }
}

dranks.getByIngredients = (req, res, next) => {
  try {
    fetch(`www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=${req.params.ingredients}`)
      .then(data => data = res.locals.drinks)
      .then(next())
      .catch(err => next(err));
  } catch (err) {
    // throw to universal error handler
    next(err);
  }
}

dranks.getRandom = (req, res, next) => {
  try {
    fetch('www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(data => data = res.locals.randomDrink)
      .then(next())
      .catch(err => next(err));
  } catch (err) {
    // throw to universal error handler
    next(err);
  }
}

dranks.getPopular = (req, res, next) => {
  try {
    fetch(`www.thecocktaildb.com/api/json/v2/${apiKey}/popular.php`)
      .then(data => data = res.locals.popular)
      .then(next())
      .catch(err => next(err));
  } catch (err) {
    // throw to universal error handler
    next(err);
  }
}

dranks.getByCategory = (req, res, next) => {
  try {
    fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.params.cat}`)
      .then(data => data = res.locals.drinks)
      .then(next())
      .catch(err => next(err));
  } catch (err) {
    // throw to universal error handler
    next(err);
  }
}

dranks.getByGlass = (req, res, next) => {
  try {
    fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?g=${req.params.glass}
    `)
      .then(data => data = res.locals.drinks)
      .then(next())
      .catch(err => next(err));
  } catch (err) {
    // throw to universal error handler
    next(err);
  }
}

module.exports = fileController;