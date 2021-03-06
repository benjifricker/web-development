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

// Import and mount the expressionsRouter
const expressionsRouter = require('./expressions');
app.use('/expressions', expressionsRouter);

// Import and mount the animalsRouter
const animalsRouter = require('./animals');
app.use('/animals', animalsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
