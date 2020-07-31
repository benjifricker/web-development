const express = require('express');
const ideasRouter = express.Router();

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId
} = require('./db');

// ideaId param handler
ideasRouter.param('ideaId', (req, res, next, id) => {
  const idea = getFromDatabaseById('ideas', id);
  if (idea) {
    req.idea = idea;
    next();
  } else {
    res.status(404).send();
  }
})

// GET all ideas
ideasRouter.get('/', (req, res, next) => {
  const response = getAllFromDatabase('ideas')
  res.send(response);
})

// POST new idea
ideasRouter.post('/', (req, res, next) => {
  const newIdea = addToDatabase('ideas', req.body);
  res.status(201).send(newIdea);
})

module.exports = ideasRouter;