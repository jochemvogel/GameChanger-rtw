const { v4: uuidv4 } = require('uuid');

const Match = require('../models/match');

const isDevelopment = process.env.IS_DEVELOPMENT;

async function getAdmin(req, res) {
    const matches = await Match.getMatchesArray();
    res.render('admin/index', {
        matches,
        isDevelopment,
    });
}

function getAddMatch(req, res) {
    res.render('admin/add-match', {
        id: uuidv4(),
        isDevelopment,
    });
}

function postAddMatch(req, res) {
    Match.createMatch(req.body);

    res.redirect('/admin');
}

async function getEditMatch(req, res) {
    const matchId = req.params.id;

    const matches = await Match.getMatchesArray();
    const match = matches.find((m) => m.id === matchId);

    res.render('admin/edit-match', {
        match,
        isDevelopment,
    });
}

async function postEditMatch(req, res) {
    const updatedMatch = {
        id: req.body.id,
        team1: req.body.team1,
        team2: req.body.team2,
        date: req.body.date,
        time: req.body.time,
        score1: req.body.score1,
        score2: req.body.score2,
        finished: req.body.finished,
    };
    const matchId = req.body.id;
    const firebaseKey = await Match.getFirebaseKey(matchId);
    Match.updateMatch(firebaseKey, updatedMatch);

    res.redirect('/admin');
}

async function postRemoveMatch(req, res) {
    const matchId = req.body.id;
    const firebaseKey = await Match.getFirebaseKey(matchId);
    Match.deleteMatch(firebaseKey);

    res.redirect('/admin');
}

module.exports = {
    getAdmin,
    postAddMatch,
    getAddMatch,
    getEditMatch,
    postEditMatch,
    postRemoveMatch,
};
