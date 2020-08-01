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

// GET all work for minion with id
minionsRouter.get('/:minionId/work', (req, res, next) => {
  const work = getAllFromDatabase('work').filter((singleWork) => {
    return singleWork.minionId === req.params.minionId;
  });
  res.send(work);
})

// POST new work for minion with id
minionsRouter.post('/:minionId/work', (req, res, next) => {
  const newWork = req.body;
  newWork.minionId = req.params.minionId;
  const createdWork = addToDatabase('work', newWork);
  res.status(201).send(createdWork);
})

// Param handler for /:workId
minionsRouter.param('workId', (req, res, next, id) => {
  const work = getFromDatabaseById('work', id);
  if (work) {
    req.work = work;
    next();
  } else {
    res.status(404).send();
  }
  console.log(work);
})

// Update single work with minionId and workId
minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {
  if (req.params.minionId != req.body.minionId) {
    res.status(400).send();
  } else {
    const updatedWork = updateInstanceInDatabase('work', req.body);
    res.send(updatedWork);
  }
})

module.exports = minionsRouter;
