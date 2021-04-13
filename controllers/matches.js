const fs = require("fs");
const Match = require("../models/match");

const { getWeatherData } = require("../models/weather");

function getMatches(req, res) {
    const dataFilePath = "./data/data.json";

    if (!fs.existsSync(dataFilePath)) {
        const matches = "No matches";
        res.render("matches/index", {
            matches,
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
        });
        return;
    }

    res.render("matches/index", {
        matches,
    });
}

async function getDetails(req, res) {
    const matchId = req.params.id;

    let jsEnabled = false;

    if (req.cookies.js === "true") {
        jsEnabled = true;
    }

    const weatherData = await getWeatherData();

    console.log(weatherData.weather[0].description);

    /*

    weatherData.main.temp - 273.15

    */

    Match.findById(matchId, (match) => {
        function formatDate(dateStr) {
            const dArr = dateStr.split("-");
            return `${dArr[2]}-${dArr[1]}-${dArr[0]}`;
        }

        const formattedDate = formatDate(match.date);

        res.render("matches/details", {
            match,
            formattedDate,
            jsEnabled,
            temp: Math.round(weatherData.main.temp - 273.15),
            condition: weatherData.weather[0].description
        });
    });
}

module.exports = { getMatches, getDetails };
