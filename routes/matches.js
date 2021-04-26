const express = require('express');
const matchesController = require('../controllers/matches');

const router = express.Router();

router
    .get('/', matchesController.getMatches)
    .get('/details/:id', matchesController.getDetails)
    .post('/matches-today', matchesController.postTodayMatches)
    .post('/matches-finished', matchesController.postFinishedMatches);

module.exports = router;
