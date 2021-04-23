const firebase = require('./firebase.js');

/**
 *
 * @returns {object} - Object with all the matches (including the Firebase key of that match)
 */
async function getRawMatchesData() {
    return await firebase
        .database()
        .ref('matches')
        .once('value')
        .then((snapshot) => {
            return (data = snapshot.val());
        })
        .catch((err) => {
            throw new Error(err);
        });
}

/**
 *
 * @returns {array} - Array with all matches
 */
async function getMatchesArray() {
    const data = await getRawMatchesData();
    return Object.values(data);
}

/**
 * Get the Firebase key/id that is linked with the match
 *
 * @param {int} matchId - The id of the match you're currently editing
 *
 * @returns {string} - The key (in Firebase) that is linked to the match
 */
async function getFirebaseKey(matchId) {
    // Get an array with all the matches (comparable with the updatedMatch above)
    const matches = await getMatchesArray();

    // Get an object with all the data (including the generated Firebase key/id)
    const rawMatchesData = await getRawMatchesData();

    // Get the (Firebase) keys of all the available matches
    // Example output: ['-MYjGIUw2SqxHitqdXiy', '-MYjGWS8zRtsCywpA_ax']
    const matchesKeysArr = Object.keys(rawMatchesData);

    // Find the index of the match you're editing
    const selectedMatch = (el) => el.id === matchId;

    const selectedMatchIndex = matches.findIndex(selectedMatch);

    // Get the key/id in Firebase where this match is stored
    return matchesKeysArr[selectedMatchIndex];
}

function createMatch(matchInfo) {
    firebase
        .database()
        .ref('matches')
        .push()
        .set({
            id: matchInfo.id,
            team1: matchInfo.team1,
            team2: matchInfo.team2,
            date: matchInfo.date,
            time: matchInfo.time,
            score1: matchInfo.score1,
            score2: matchInfo.score2,
            finished: matchInfo.finished || 'off',
        });
}

function updateMatch(matchId, updatedMatch) {
    // Insert the updated match in the right key
    let updates = {};
    updates['/matches/' + matchId] = updatedMatch;

    // Execute the update
    firebase.database().ref().update(updates);
}

function deleteMatch(matchId) {
    firebase
        .database()
        .ref('matches/' + matchId)
        .remove();
}

module.exports = {
    getMatchesArray,
    getFirebaseKey,
    createMatch,
    updateMatch,
    deleteMatch,
};
