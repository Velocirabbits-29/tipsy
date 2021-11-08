const express = require('express');
const dbController = require('./controllers/dbController');
const router = express.Router();

router.get('/:id', dbController.getFaves, (req, res) =>
  res.status(200).json(res.locals.faves)
);

module.exports = router;
