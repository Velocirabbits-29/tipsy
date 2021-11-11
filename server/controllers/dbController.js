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

dbControllers.addFav = async (req, res, next) => {
  // add to favorites table
  const username = req.params.user;
  const idDrink = req.params.drink;
  console.log('[drink, user]', [idDrink, username]);
  try {
    let result = await db.query('SELECT max(faveid) FROM favorites')
    console.log('result', result)
    let maxId = result.rows[0].max;
    console.log('maxid', maxId);
    maxId++;
    console.log('maxid', maxId);
    let myQuery = 'INSERT INTO favorites (faveid, iddrink, username)';
    myQuery += ` VALUES ('${maxId}', '${idDrink}', '${username}')`
    let data = await db.query(myQuery);
    console.log('SUCCESS ADDING TO FAVS TABLE!')
  } catch (err) {
    console.log(err);
  }

}


dbControllers.deleteFav = async (req, res, next) => {
  const username = req.params.user;
  const idDrink = req.params.drink;
  console.log('[drink, user]', [idDrink, username]);
  let myQuery = 'DELETE FROM favorites WHERE'
  myQuery += ` idDrink='${idDrink}' AND username='${username}'`;
  try {
    let data = await db.query(myQuery);
    console.log('SUCCESS DELETING FROM FAVS TABLE!')
  } catch(err) {
    console.log(err);
  }
}

//findCocktail middleware will be followed by addFave middleware
dbControllers.findCocktail = (req, res, next) => {
  const cocktailName = req.req.body.name;
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
  const cocktailValues = req.req.body.name;
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
  // sample req body object
  // const body = {
  //   "name": "Boulevardier",
  //   "parsedIngredients": {
  //     "ingredients": [
  //       "Bourbon",
  //       "Campari",
  //       "Sweet Vermouth"
  //     ],
  //     "measurements": [
  //       "1 1/4 oz",
  //       "1 oz",
  //       "1 oz"
  //     ]
  //   },
  //   "instructions": "Add together and drank",
  //   "mood": "Cocktail",
  //   "creator": "rfh"
  // }


  
  const queryStr = 'SELECT MAX(iddrink) FROM cocktails;';
  
  let newDrinkID;
  db.query(queryStr)
  .then(data => {
      // get last id in the db and increment by 1
      newDrinkID = data.rows[0].max + 1;
      const queryTxt = `INSERT INTO cocktails (iddrink, strdrink, strinstructions, strcategory, idcreator, stringredient1, stringredient2, stringredient3, stringredient4, stringredient5, stringredient6, stringredient7, stringredient8, stringredient9, stringredient10, strmeasure1, strmeasure2, strmeasure3, strmeasure4, strmeasure5, strmeasure6, strmeasure7, strmeasure8, strmeasure9, strmeasure10)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)`
      const values = [newDrinkID, req.body.name, req.body.instructions, req.body.mood, req.body.creator, req.body.parsedIngredients.ingredients[0], req.body.parsedIngredients.ingredients[1], req.body.parsedIngredients.ingredients[2], req.body.parsedIngredients.ingredients[3], req.body.parsedIngredients.ingredients[4], req.body.parsedIngredients.ingredients[5], req.body.parsedIngredients.ingredients[6], req.body.parsedIngredients.ingredients[7], req.body.parsedIngredients.ingredients[8], req.body.parsedIngredients.ingredients[9], req.body.parsedIngredients.measurements[0], req.body.parsedIngredients.measurements[1], req.body.parsedIngredients.measurements[2], req.body.parsedIngredients.measurements[3], req.body.parsedIngredients.measurements[4], req.body.parsedIngredients.measurements[5], req.body.parsedIngredients.measurements[6], req.body.parsedIngredients.measurements[7], req.body.parsedIngredients.measurements[8], req.body.parsedIngredients.measurements[9]]

      db.query(queryTxt, values)
        .then(data => {
          console.log('new data is written -->>', data)
          return next()
        })
        .catch(err => {
          return next({
            message: err.message,
            log: 'error in getRecipes middleware',
          });
        });
    })
    .catch(err => {
      return next({
        message: err.message,
        log: 'error in getRecipes middleware',
      });
    });


  // const recipeKeys = ['user_id', 'name', 'instructions', 'ingredient_list'];
  // const recipeValues = [      
  //   req.params.id,    
  //   req.req.body.name,  
  //   req.req.body.instructions,
  //   req.req.body.ingredients,
  // ];
  // console.log(recipeValues);
  // const queryStr = `
  // INSERT into recipes (${recipeKeys})
  // VALUES ($1, $2, $3, $4) 
  // RETURNING *
  // `;
  // db.query(queryStr, recipeValues)
  //   .then((data) => {
  //     res.locals.recipe = data.rows[0];
  //     return next();
  //   })
  //   .catch((err) => {
  //     return next({
  //       message: err.message,
  //       log: 'error in addRecipe middleware',   
  //     });
  //   });
};

module.exports = dbControllers;
