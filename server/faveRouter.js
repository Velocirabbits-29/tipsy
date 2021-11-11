const express = require('express');
const dbController = require('./controllers/dbController');
const router = express.Router();

router.get('/:id', dbController.getFaves, (req, res) =>
  res.status(200).json(res.locals.faves)
);

router.get('/addFav/:user/:drink', dbController.addFav, (req, res) =>
  res.status(200).send('Success adding Fav!')
);

router.get('/deleteFav/:user/:drink', dbController.deleteFav, (req, res) =>
  res.status(200).send('Success deleting Fav!')
);

module.exports = router;
