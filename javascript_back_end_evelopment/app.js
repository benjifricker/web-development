const express = require('express');
const app = express();
const { seedElements } = require('./utils');

// Serves Express Yourself website
app.use(express.static('public'));

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

const expressions = [];
seedElements(expressions, 'expressions');

// Get all expressions
app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

// Get specific expression
app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
