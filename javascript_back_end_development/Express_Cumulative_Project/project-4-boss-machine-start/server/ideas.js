const express = require('express');
const ideasRouter = express.Router();

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId
} = require('./db');

ideasRouter.get('/', (req, res, next) => {
  const response = getAllFromDatabase('ideas')
  res.send(response);
})

module.exports = ideasRouter;