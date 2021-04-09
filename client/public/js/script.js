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

const socket = io(`${window.location.hostname}:8001`);
// const socket = io(`https://gamechanger-wss.herokuapp.com:8001/`);

console.log(socket);

function emitMsg() {
    socket.emit("test-msg", true);
    console.log("Emit msg");
}

socket.on("test-msg", () => {
    alert("Socket on 'test-msg'");
});

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
