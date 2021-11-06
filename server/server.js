const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const drinksRouter = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

/**
 * handle requests for static files
 */
 app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/', drinksRouter);

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.status(404).send('Go home Rebecca, you\'re drunk'));

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(PORT, (err, res) => {
  if (err) console.log(err);
  else console.log('Server is listening on:', `http://localhost:${PORT}`);
});
