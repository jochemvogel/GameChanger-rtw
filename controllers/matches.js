const fs = require("fs");
const Match = require("../models/match");

const { getWeatherData } = require("../models/weather");

const isDevelopment = process.env.IS_DEVELOPMENT;

function getMatches(req, res) {
    const dataFilePath = "./data/data.json";

    if (!fs.existsSync(dataFilePath)) {
        const matches = "No matches";
        res.render("matches/index", {
            matches,
            isDevelopment,
        });
        return;
    }

    let rawData = fs.readFileSync(dataFilePath);

    const matches = JSON.parse(rawData);

    const matchesObjIsEmpty = Object.keys(matches).length === 0;

    if (matchesObjIsEmpty) {
        const matches = "No matches";
        res.render("matches/index", {
            matches,
            isDevelopment,
        });
        return;
    }

    res.render("matches/index", {
        matches,
        isDevelopment,
    });
}

async function getDetails(req, res) {
    const matchId = req.params.id;

    let weatherIconUrl;
    let weatherTemp;

    // const storedUserName = localStorage.getItem('userName')

    // console.log(storedUserName);

    // Reduce API requests
    if (isDevelopment) {
        weatherIconUrl = "http://openweathermap.org/img/wn/50d@2x.png"
        weatherTemp = 10;
    } else {
        const weatherData = await getWeatherData();

        const icon = weatherData.weather[0].icon;
        weatherIconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherTemp = Math.round(weatherData.main.temp - 273.15)
    }

    Match.findById(matchId, (match) => {
        function formatDate(dateStr) {
            const dArr = dateStr.split("-");
            return `${dArr[2]}-${dArr[1]}-${dArr[0]}`;
        }

        const formattedDate = formatDate(match.date);

        res.render("matches/details", {
            match,
            formattedDate,
            weatherTemp,
            weatherIconUrl,
            isDevelopment,
        });
    });
}

module.exports = { getMatches, getDetails };
