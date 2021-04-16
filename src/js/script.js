const isDevelopment = document.location.host.includes("localhost");
const socket = isDevelopment
    ? io(`http://localhost:1234/`)
    : io(`https://gamechanger-wss.herokuapp.com/`);

/**
 *
 * @param {object} e
 *
 * Toggles the menu
 */
function toggleMenu(e) {
    e.href = "javascript: void(0)";

    const body = e.parentElement;
    const topNav = body.childNodes[3];

    e.classList.toggle("opened");

    topNav.hidden = !topNav.hidden;
}

function enableNotifications() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("Hi there!");
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification("Hi there!");
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
    socket.emit("match-updated", match);
}

socket.on("match-updated", (match) => {
    /*
    Would like to make this dynamic, but I haven't found a way to store the previous values
    You have to either save the old value or create a watcher that will watch the old values
    Either way, I'm not be able to do this.

    With dynamic I mean: If score1 > oldScore 1 => body is 'match.team1 scored!'
    It'll improve the UX, because users know what happened instead of just a message that something changed
    */
    const title = notificationTitle(match);
    const body = notificationBody(match);

    newNotification(
        `${match.team1} - ${match.team2}`,
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
