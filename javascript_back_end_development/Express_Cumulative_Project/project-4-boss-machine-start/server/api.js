const express = require('express');
const apiRouter = express.Router();

// Import router modules
const minionsRouter = require('./minions');
const ideasRouter = require('./ideas');

// Use router modules
apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);

module.exports = apiRouter;
