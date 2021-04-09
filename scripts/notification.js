function newNotification(title, body) {
    const options = {
        body,
    }

    const notification = new Notification(title, options);
}

module.exports = {newNotification}
