function enableNotifications() {
    addMatchIdInLS();

    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
        alert('This browser does not support desktop notification');
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === 'granted') {
        console.log('Permission granted');
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                console.log('Permission granted');
            }
        });
    }
}

/**
 *
 * @param {string} title
 * @param {string} body
 * @param {object} match
 *
 * Creates a new notification based on the input/parameters
 */
function newNotification(title, body, match) {
    const options = {
        body,
    };

    const notification = new Notification(title, options);
    notification.onclick = (e) => {
        e.preventDefault();
        window.location = `/details/${match.id}`;
    };
}

/**
 *
 * @param {int} id
 * @param {string} team1
 * @param {string} team2
 * @param {string} score1
 * @param {string} score2
 * @param {string} finished
 *
 * Click event on the SAVE button (Edit Match)
 */
function updateGame(id, team1, team2, score1, score2, finished) {
    const match = {
        id,
        team1,
        team2,
        score1,
        score2,
        finished,
    };

    socket.emit('match-updated', match);

    /* TODO:

    It's giving the old value of the match right now. Can't give the new values client side, so I've to do that server side.
    In order to do that, I still need to emit the oldValues and then need to make a connection to Firebase on the WSS
    Then I can emit both that oldMatch and the newMatch
    Client side I can check which update needs to be appear. I.e. :
        - newMatch.score1 > oldMatch.score1 => newMatch.team1 has scored!
        - newMatch.finished === 'on' && oldMatch.finished === 'off' => The match is finished

    It'll simply take too much time to create this (because of all those exceptions)
    For now it's showing the old values
    */
}

socket.on('match-updated', (match) => {
    /*
    Would like to make this dynamic, but I haven't found a way to store the previous values
    You have to either save the old value or create a watcher that will watch the old values
    Either way, I'm not be able to do this.

    With dynamic I mean: If score1 > oldScore 1 => body is 'match.team1 scored!'
    It'll improve the UX, because users know what happened instead of just a message that something changed
    */
    const title = notificationTitle(match);
    const body = notificationBody(match);

    let subscribedMatchesArr = localStorage.getItem('subscribedMatches');
    subscribedMatchesArr = JSON.parse(subscribedMatchesArr);
    if (subscribedMatchesArr === null) {
        return;
    }

    const clientIsSubscribed = subscribedMatchesArr.includes(match.id);
    if (!clientIsSubscribed) {
        return;
    }

    newNotification(
        `${match.team1} - ${match.team2} (${match.score1}-${match.score2})`,
        `Game is updated!`,
        match
    );
});

/**
 *
 * @param {object} match
 *
 * Dynamic title based on change
 */
function notificationTitle(match) {}

/**
 *
 * @param {object} match
 *
 * Dynamic title based on change
 */
function notificationBody(match) {}

/**
 * Gets the ID of the match based on the url param
 *
 * @returns {string} - ID of the match
 */
function getMatchId() {
    const pathName = document.location.pathname;
    const splittedArr = pathName.split('/');
    return splittedArr[2];
}

/**
 * Adds the current match ID in the array with subscribed matches (notifications)
 */
function addMatchIdInLS() {
    const currentMatchId = getMatchId();

    let subscribedMatchesArrInLS = localStorage.getItem('subscribedMatches')
    subscribedMatchesArrInLS = JSON.parse(subscribedMatchesArrInLS);

    // Remove the 1, 2 & 3 from array (dummy content)
    if (subscribedMatchesArrInLS.includes(1)) {
        subscribedMatchesArrInLS.splice(0, 3);
    }

    const matchAlreadyExists = subscribedMatchesArrInLS.includes(currentMatchId)

    if (!matchAlreadyExists) {
        subscribedMatchesArrInLS.push(currentMatchId)
        localStorage.setItem('subscribedMatches', JSON.stringify(subscribedMatchesArrInLS));
    } else {
        console.log('Notications are already enabled for this match');
    }
}
