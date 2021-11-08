const express = require('express');
const dbController = require('./controllers/dbController');
const router = express.Router();

router.get('/:id', dbController.getFaves, (req, res) =>
  res.status(200).json(res.locals.faves)
);

router.post('/:id', dbController.addFave, (req, res) =>
  res.status(200).json(res.locals.fave)
);

// router.delete('/:id', dbController.deleteFave, (req, res) =>
//   res.status(200).send('success')
// );

module.exports = router;
