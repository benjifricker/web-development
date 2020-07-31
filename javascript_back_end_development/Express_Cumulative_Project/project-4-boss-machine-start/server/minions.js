const express = require('express');
const minionsRouter = express.Router();

// Import methods from db module (data base)
const { 
  createMeeting, 
  getAllFromDatabase, 
  getFromDatabaseById, 
  addToDatabase,
  updateInstanceInDatabase, 
  deleteFromDatabasebyId, 
  deleteAllFromDatabase
} = require('./db');

// GET all minions
minionsRouter.get('/', (req, res, next) => {
  const response = getAllFromDatabase('minions');
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(response, null, 2));
})

// POST new minion
minionsRouter.post('/', (req, res, next) => {
  const newMinion = addToDatabase('minions', req.body);
  res.status(201).send(newMinion);
})

module.exports = minionsRouter;
