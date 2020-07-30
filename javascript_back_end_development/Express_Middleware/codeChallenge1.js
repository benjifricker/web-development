const express = require('express');
const app = express();

app.get('/whatis/apple', (req, res, next) => {
  res.send('fruit');
});
app.get('/whatis/orange', (req, res, next) => {
  res.send('fruit');
});
app.get('/whatis/banana', (req, res, next) => {
  res.send('fruit');
});
