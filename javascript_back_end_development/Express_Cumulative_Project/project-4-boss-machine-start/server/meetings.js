const express = require('express');
const meetingsRouter = express.Router();

const {
  createMeeting,
  getAllFromDatabase,
  addToDatabase,
  deleteAllFromDatabase
} = require('./db');

// GET all meetings
meetingsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('meetings'));
})

// POST new meeting
meetingsRouter.post('/', (req, res, next) => {
  const newMeeting = addToDatabase('meetings', createMeeting());
  res.status(201).send(newMeeting);
})

// DELETE all meetings
meetingsRouter.delete('/', (req, res, next) => {
  deleteAllFromDatabase('meetings');
  res.status(204).send();
})

module.exports = meetingsRouter;
