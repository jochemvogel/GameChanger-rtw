chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let chatMessage = e.target[0].value;

    if (chatMessage !== '') {
        socket.emit('chat-message', chatMessage)
        addMessage(chatMessage, true)
        e.target[0].value = ''
    }
})

socket.on("chat-message", (message) => {
    addMessage(message, false)
})

function addMessage(message, sender) {
    let newMessage = document.createElement('li');
    newMessage.innerText = message;

    newMessage.classList.add('msg');

    sender ? newMessage.classList.add('sent-msg') : newMessage.classList.add('received-msg');

    messages.appendChild(newMessage);
    newMessage.scrollIntoView(true);
}
