const { v4: uuidv4 } = require('uuid');

const Match = require('../models/match');

const isDevelopment = process.env.IS_DEVELOPMENT;

const io = require('socket.io-client');
const socket = isDevelopment
    ? io(`http://localhost:1234/`)
    : io(`https://gamechanger-wss.herokuapp.com/`);

async function getAdmin(req, res) {
    const matches = await Match.getMatchesArray();

    const todayObject = new Date();
    const todayString = todayObject.toISOString().split('T')[0];

    res.render('admin/index', {
        matches,
        isDevelopment,
        disabledBtn: 'all',
        today: todayString
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

    socket.emit('new-match');

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
        finished: req.body.finished || 'off',
    };
    const matchId = req.body.id;
    const firebaseKey = await Match.getFirebaseKey(matchId);
    Match.updateMatch(firebaseKey, updatedMatch);

    res.redirect('/admin');
}

async function postRemoveMatch(req, res) {
    const matchId = req.params.id;

    const firebaseKey = await Match.getFirebaseKey(matchId);

    Match.deleteMatch(firebaseKey);

    res.redirect('/admin');
}

/* = MATCHES FILTERS = */

async function postTodayMatches(req, res) {
    const matches = await Match.getMatchesArray();

    const today = new Date();
    const todayString = today.toISOString().split('T')[0];

    let filteredMatches = [];

    matches.map(match => {
        if (match.date === todayString) {
            filteredMatches.push(match)
        }
    })

    res.render('admin/index', {
        matches: filteredMatches,
        isDevelopment,
        disabledBtn: 'today',
        today: todayString
    });
}


async function postFinishedMatches(req, res) {
    const matches = await Match.getMatchesArray();

    let filteredMatches = [];

    matches.map(match => {
        if (match.finished === 'on') {
            filteredMatches.push(match)
        }
    })

    res.render('admin/index', {
        matches: filteredMatches,
        isDevelopment,
        disabledBtn: 'finished'
    });
}

module.exports = {
    getAdmin,
    postAddMatch,
    getAddMatch,
    getEditMatch,
    postEditMatch,
    postRemoveMatch,
    postTodayMatches,
    postFinishedMatches
};
