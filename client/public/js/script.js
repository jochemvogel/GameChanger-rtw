function notifyMe() {
    // If the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support notification");
    }

    // If have alredy been granted
    else if (Notification.permission === "granted") {
        newNotification("Game Update!", "Your favorite team scored!");
    }

    // Otherwise, we need to ask the user for permission
    else if (
        Notification.permission !== "denied" ||
        Notification.permission === "default"
    ) {
        Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                newNotification("Game Update!", "Your favorite team scored!");
            }
        });
    }
}

/* Socket simulation */
function enableNotifications() {
    notifyMe();

    setInterval(() => {
        notifyMe();
    }, 60 * 1000);
}

function newNotification(title, body) {
    const options = {
        body,
    };

    const notification = new Notification(title, options);
}

// let socket;

// if (process.env.IS_DEVELOPMENT) {
//     socket = io(`${process.env.DEVELOPMENT_URL}:${WSS_PORT}`);
// } else {
//     socket = io(`${process.env.PRODUCTION_URL}:${WSS_PORT}`);
// }

// console.log(socket);

// console.log(process.env.IS_DEVELOPMENT);

// const socket = io("localhost:8001");

function updateGame() {
    const title = "Game Update!";
    const body = "Your favorite team scored!";

    // socket.emit('matchUpdate', { title, body })
}

function toggleMenu(e) {
    e.href = "javascript: void(0)";

    const body = e.parentElement;
    const topNav = body.childNodes[3];

    e.classList.toggle("opened");

    topNav.hidden = !topNav.hidden;
}
