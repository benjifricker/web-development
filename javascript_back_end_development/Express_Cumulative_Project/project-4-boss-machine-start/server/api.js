const express = require('express');
const apiRouter = express.Router();

// Import router modules
const minionsRouter = require('./minions');

// Use router modules
apiRouter.use('/minions', minionsRouter);

module.exports = apiRouter;
