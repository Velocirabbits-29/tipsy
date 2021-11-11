const db = require('../models/userModels');

const dbControllers = {};

dbControllers.getFaves = (req, res, next) => {

  const username = res.locals.user.username
  const values = [username];
  const queryStr =
    `SELECT c.*
    FROM users u
    INNER JOIN
    favorites f
    ON u.username = f.username
    INNER JOIN
    cocktails c
    ON f.iddrink = c.iddrink
    WHERE u.username = $1`;

  db.query(queryStr, values)
    .then(data => {
      // console.log(data.rows[0])
      res.locals.user.faves = data.rows
      // console.log(`${username} has following favorite drinks `, data.rows)
      return next();
    })
    .catch(err => {
      return next({
        message: err.message,
        log: 'error in getFaves middleware',
      });
    });
};

//findCocktail middleware will be followed by addFave middleware
dbControllers.findCocktail = (req, res, next) => {
  const cocktailName = req.body.name;
  const queryStrLocateCocktailId = `
  SELECT cocktail_id from cocktail c
  where c.name = ${cocktailName}`;
  db.query(queryStrLocateCocktailId)
    .then((data) => {
      if (!data.rows[0]) {
        return next();
      } else {
        res.locals.cocktailId = data.rows[0];
        return next();
      }
    })
    .catch((err) => {
      return next({
        message: err.message,
        log: 'error in locating CocktailId middleware',
      });
    });
};

//addFave middleware follows the findCocktail middleware
//at the moment ying hasn't been able to find a better way to insert into many-to-many relationship tables (in this case, users + faves + cocktails)
//as you could see below, there's some nested query happening.. also kind of verbose...

dbControllers.addFave = (req, res, next) => {
  if (res.locals.cocktailId) {
    const favesKeys = ['user_id', 'cocktail_id'];
    const favesValues = [req.params.id, res.locals.cocktailId];
    const queryStrInsertFaves = `
    INSERT INTO faves f ${favesKeys} 
    VALUES($1, $2)
    RETURNING *
    `;
    db.query(queryStrInsertFaves, favesValues)
      .then((data) => {
        res.locals.fave = data.rows[0];
        return next();
      })
      .catch((err) => {
        return next({
          message: err.message,
          log: 'error in addToFaves table part (the cocktail name already exists in the cocktails table)',
        });
      });
  }

  const cocktailKeys = ['name'];
  const cocktailValues = req.body.name;
  const queryStrInsertCocktail = `
  INSERT into cocktails c ${cocktailKeys} VALUES($1)
  `;
  const queryStrInsertFaves = `
  INSERT INTO faves f ${favesKeys} 
  VALUES($1, $2)
  RETURNING *`;

  db.query(queryStrInsertCocktail, cocktailValues)
    .then((data) => {
      res.locals.cocktailId = data.rows[0]['cocktail_id'];
    })
    .then(() => {
      const favesKeys = ['user_id', 'cocktail_id'];
      const favesValues = [req.params.id, res.locals.cocktailId];

      db.query(
        queryStrInsertFaves,
        favesValues
      )((data) => {
        res.locals.fave = data.rows[0];
        return next();
      }).catch((err) => {
        return next({
          message: err.message,
          log: 'error in addToFaves table part (the cocktail name does not already exist in the cocktails table and it was being added)',
        });
      });
    })
    .catch((err) => {
      return next({
        message: err.message,
        log: 'error in addRecipe middleware',
      });
    });
};

dbControllers.getRecipes = (req, res, next) => {
  const queryStr = `SELECT name, instructions, ingredient_list FROM recipes r
  INNER JOIN users u 
  ON u.user_id = r.user_id
  WHERE u.user_id = $1
  `;
  const values = [req.params.id];
  db.query(queryStr, values)
    .then((data) => {
      res.locals.recipes = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        message: err.message,
        log: 'error in getRecipes middleware',
      });
    });
};

dbControllers.addRecipe = (req, res, next) => {
  const recipeKeys = ['user_id', 'name', 'instructions', 'ingredient_list'];
  const recipeValues = [
    req.params.id,
    req.body.name,
    req.body.instructions,
    req.body.ingredients,
  ];
  console.log(recipeValues);
  const queryStr = `
  INSERT into recipes (${recipeKeys})
  VALUES ($1, $2, $3, $4) 
  RETURNING *
  `;
  db.query(queryStr, recipeValues)
    .then((data) => {
      res.locals.recipe = data.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        message: err.message,
        log: 'error in addRecipe middleware',
      });
    });
};

module.exports = dbControllers;
