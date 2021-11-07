const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const apiKey = 9973533;

const dranks = {};

// API GET REQUESTS

dranks.handleSubmit = (req, res, next) => {
  const ids = [];
  const queryMet = [];
  // query the API with the ingredients our user entered on the homepage.
  fetch(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=${req.params.ingredients}`)
      .then(data => data.json())
      .then(async (data) => {
        // the api returns an array if any drinks are found
        // for every drink the query returns
        for (drink in data.drinks) {
          // grab the drink's id and push to an array
          ids.push(data.drinks[drink].idDrink);
        }
        // once ids has been fully populated
        for (let i = 0; i < ids.length; i++) {
          // check the api entry of each drink returned by the ingredients query
          await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ids[i]}`)
          .then(data => data.json())
          .then(data => {
            // if the current drink's category matches the category corresponding to the user's input mood
            if (data.drinks[0].strCategory === req.params.category) {
              // push that drink object into an array
              queryMet.push(data.drinks[0]);
              // res.locals.drink = data.drinks[0];
              // return next();
            }
          })
        }
        // if the query returned no results
        if (queryMet.length === 0) {
          // assign a null object to res.locals for the front end to interpet
          res.locals.drinks = {"drinks": null};
          // and continue the middleware chain
          next();
        } else {
          // if the query DID return results, assign them to res.locals
          res.locals.drinks = queryMet;
          // and continue the middleware chain
          next();
        }
      })
      // catch any errors that may occur and send to the universal error handler
      .catch((err) => next({
        log: 'Express error handler caught error in handleSubmit',
        status: 500,
        message: { err: `${err}` },
      }));
}

dranks.getRandom = (req, res, next) => {
  // returns one drink at random...she's so easy. Love her.
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
  // returns the 20 most popular drinks in the databse
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




// =============================CURRENTLY UNUSED MIDDLEWARE=============================

dranks.getByIngredients = (req, res, next) => {
  // if searching by multiple ingredients, they are seperated by a commma with no spaces or underscoring.
  // ingredients that have multiple words seperate the words by underscore (i.e. Dry_Vermouth)
    fetch(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=${req.params.ingredients}`)
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

dranks.getByName = (req, res, next) => {
  // will reurn all drinks with the search query in the name
  // i.e. searching 'margarita' returns all cocktails with the word margarita in them
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

dranks.getByCategory = (req, res, next) => {
  // returns all drinks in a certain category
  // view list of possible categories here: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
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
  // returns all drinks traditionally served in the searched glass
  // view list of possible glasses here: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'
  // this is a stretch goal but it's readily available for if/when we want it
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
