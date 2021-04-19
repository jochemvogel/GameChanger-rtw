chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let chatMessage = e.target[0].value;
    let matchId = getMatchId()

    if (chatMessage !== '') {
        socket.emit('chat-message', chatMessage, matchId)
        addMessage(chatMessage, true)
        e.target[0].value = ''
    }
})

socket.on("chat-message", (message, socketMatchId) => {
    const currentMatchId = getMatchId();

    if (currentMatchId === socketMatchId) {
        addMessage(message, false)
    }
})

function addMessage(message, sender) {
    let newMessage = document.createElement('li');
    newMessage.innerText = message;

    newMessage.classList.add('msg');

    sender ? newMessage.classList.add('sent-msg') : newMessage.classList.add('received-msg');

    messages.appendChild(newMessage);
    newMessage.scrollIntoView(true);
}

function getMatchId() {
    const pathName = document.location.pathname;
    const splittedArr = pathName.split('/');
    return splittedArr[2];
}


// function toggleChat() {
//     chatSection.classList.toggle('show');
//     const matchIdFromUrl = getMatchId();
//     socket.emit('join-room', matchIdFromUrl)
// }

// socket.on("join-room", (message) => {
//     console.log('Room joined');
// })
