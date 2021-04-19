chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let chatMessage = e.target[0].value;

    if (chatMessage !== '') {
        socket.emit('chat-message', chatMessage)
        addMessage(chatMessage)
        e.target[0].value = ''
    }
})

function addMessage(message) {
    let newMessage = document.createElement('li');
    newMessage.innerText = message;
    newMessage.setAttribute('class', 'newMessage');
    messages.appendChild(newMessage);
    newMessage.scrollIntoView(true);
}

socket.on("chat-message", (message) => {
    let newMessage = document.createElement('li');
    newMessage.innerText = message;
    newMessage.setAttribute('class', 'newMessage');
    messages.appendChild(newMessage);
    newMessage.scrollIntoView(true);
})
