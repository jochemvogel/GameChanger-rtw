const Match = require('../models/match');
const { getWeatherData } = require('../models/weather');

const Filters = require('../helpers/filters');

const isDevelopment = process.env.IS_DEVELOPMENT;

async function getMatches(req, res) {
    // TODO: Create fallback if there are no matches
    const matches = await Match.getMatchesArray();

    res.render('matches/index', {
        matches,
        isDevelopment,
    });
}

async function getDetails(req, res) {
    const matchId = req.params.id;

    let weatherIconUrl;
    let weatherTemp;

    // Reduce API requests
    if (isDevelopment) {
        weatherIconUrl = 'http://openweathermap.org/img/wn/50d@2x.png';
        weatherTemp = 10;
    } else {
        const weatherData = await getWeatherData();

        const icon = weatherData.weather[0].icon;
        weatherIconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherTemp = Math.round(weatherData.main.temp - 273.15);
    }

    const matches = await Match.getMatchesArray();
    const match = matches.find((m) => m.id === matchId);

    const formattedDate = Filters.formatDate(match.date);

    res.render('matches/details', {
        match,
        formattedDate,
        weatherTemp,
        weatherIconUrl,
        isDevelopment,
    });
}

module.exports = { getMatches, getDetails };
