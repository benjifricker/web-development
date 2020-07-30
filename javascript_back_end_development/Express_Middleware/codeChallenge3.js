const express = require('express');
const app = express();

const database = {
  snacks: ['chips', 'apple', 'cookies'],
  sides: ['beans and rice', 'cole slaw', 'broccoli'],
  appetizers: ['oysters', 'dumplings', 'smoked almonds'],
};

// Add your code here:
const timeMiddleware = () => {};

app.get('/snacks', (req, res, next) => {
  const currentTime = Date.now();
  res.send(`Snacks as of ${currentTime}: ${database.snacks}`);
});

app.get('/sides', (req, res, next) => {
  const currentTime = Date.now();
  res.send(`Sides as of ${currentTime}: ${database.sides}`);
});

app.get('/appetizers', (req, res, next) => {
  const currentTime = Date.now();
  res.send(`Appetizers as of ${currentTime}: ${database.appetizers}`);
});
