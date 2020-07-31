const express = require('express');
const minionsRouter = express.Router();

// Import methods from db module (data base)
const { 
  getAllFromDatabase, 
  getFromDatabaseById, 
  addToDatabase,
  updateInstanceInDatabase, 
  deleteFromDatabasebyId
} = require('./db');

// minionsRouter.param
minionsRouter.param('minionId', (req, res, next, id) => {
  const minion = getFromDatabaseById('minions', id);
  if (minion) {
    req.minion = minion;
    next();
  } else {
    res.status(404).send();
  }
})

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

// GET minion by id
minionsRouter.get('/:minionId', (req, res, next) => {
  res.send(req.minion);
})

// Update single minion with id
minionsRouter.put('/:minionId', (req, res, next) => {
  const updatedMinion = updateInstanceInDatabase('minions', req.body);
  res.send(updatedMinion);
})

// Delete single minion with id
minionsRouter.delete('/:minionId', (req, res, next) => {
  const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
  if (deleted) {
    res.status(204);
  } else {
    res.status(404);
  }
  res.send();
})

module.exports = minionsRouter;
