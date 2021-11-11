const express = require('express');
const dbController = require('./controllers/dbController');
const router = express.Router();

router.get('/:id', dbController.getRecipes, (req, res) =>
  res.status(200).json(res.locals.recipes)
);

router.post('/add', dbController.addRecipe, (req, res) =>
  res.status(200).json('recipe submitted')
);

module.exports = router;
