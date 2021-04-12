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

function newNotification(title, body) {
    const options = {
        body,
    };

    const notification = new Notification(title, options);
}

// const socket = io(`https://gamechanger-wss.herokuapp.com/`);
const socket = io(`http://localhost:1234/`);

socket.on("match-updated", () => {
    alert("match-updated");
    newNotification("tittleeee", "booooddyyy");
});

function updateGame() {
    socket.emit("match-updated", true);
    // newNotification('tittleeee', 'booooddyyy')
    console.log("hello");
}

function toggleMenu(e) {
    e.href = "javascript: void(0)";

    const body = e.parentElement;
    const topNav = body.childNodes[3];

    e.classList.toggle("opened");

    topNav.hidden = !topNav.hidden;
}
