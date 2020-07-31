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

module.exports = minionsRouter;
