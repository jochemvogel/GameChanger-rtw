const fetch = require("node-fetch");

/**
 * @param {string} url - URL that needs to be fetched
 *
 * @returns {Object} data - All the data that is fetched by the API
 */
async function getResults(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = { getResults };
