const express = require('express');
const app = express();

const morgan = require('morgan');

app.use(morgan('short'));

app.get('/say-hi', (req, res, next) => {
  res.send('Hi!');
});

app.get('/say-bye', (req, res, next) => {
  res.send('Bye!');
});
