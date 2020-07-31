const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 4001;

// Middleware for handling CORS requests from index.html
app.use(cors());

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Mount apiRouter
const apiRouter = require('./server/api');

// Testing
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:

}

module.exports = app;