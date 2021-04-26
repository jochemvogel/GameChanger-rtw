const Match = require('../models/match');
const { getWeatherData } = require('../models/weather');

const Filters = require('../helpers/filters');

const isDevelopment = process.env.IS_DEVELOPMENT;

async function getMatches(req, res) {
    const matches = await Match.getMatchesArray();

    res.render('matches/index', {
        matches,
        isDevelopment,
        disabledBtn: 'all'
    });
}

async function getDetails(req, res) {
    const matchId = req.params.id;

    let weatherIconUrl;
    let weatherTemp;
    let weatherCondition;

    // Reduce API requests
    if (isDevelopment) {
        weatherIconUrl = 'http://openweathermap.org/img/wn/50d@2x.png';
        weatherTemp = 10;
        weatherCondition = 'few clouds';
    } else {
        const weatherData = await getWeatherData();

        const icon = weatherData.weather[0].icon;
        weatherIconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherTemp = Math.round(weatherData.main.temp - 273.15);
        weatherCondition = weatherData.weather[0].description;
    }

    const matches = await Match.getMatchesArray();
    const match = matches.find((m) => m.id === matchId);

    const formattedDate = Filters.formatDate(match.date);

    res.render('matches/details', {
        match,
        formattedDate,
        weatherTemp,
        weatherIconUrl,
        weatherCondition,
        isDevelopment,
    });
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

    res.render('matches/index', {
        matches: filteredMatches,
        isDevelopment,
        disabledBtn: 'today'
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

    res.render('matches/index', {
        matches: filteredMatches,
        isDevelopment,
        disabledBtn: 'finished'
    });
}


module.exports = { getMatches, getDetails, postTodayMatches, postFinishedMatches };
