const { getResults } = require("./fetch");

async function getWeatherData() {
    const host = "http://api.openweathermap.org/data/2.5/weather";
    const query = "Amsterdam";

    const url = `${host}?q=${query}&appid=${process.env.API_KEY}`;

    return await getResults(url);
}

module.exports = { getWeatherData };
