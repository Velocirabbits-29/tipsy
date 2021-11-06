const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const router = './router'

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/', router);


app.listen(PORT, (err, res) => {
  if (err) console.log(err);
  else console.log('Server is listening on:', `http://localhost:${PORT}`);
});
