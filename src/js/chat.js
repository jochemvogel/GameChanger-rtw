if (typeof chatForm !== 'undefined') {
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let userName = e.target[0].value;
        let chatMessage = e.target[1].value;
        const matchId = getMatchId();

        if (chatMessage !== '') {
            socket.emit('chat-message', userName, chatMessage, matchId);
            addMessage(userName, chatMessage, true);
            localStorage.setItem('userName', userName);
            e.target[1].value = '';
        }
    });
}

socket.on('chat-message', (name, message, socketMatchId) => {
    const currentMatchId = getMatchId();

    if (currentMatchId === socketMatchId) {
        addMessage(name, message, false);
    }
});

function addMessage(name, message, isSender) {
    let newMessage = document.createElement('li');
    newMessage.classList.add('msg');

    if (isSender) {
        newMessage.innerText = message;
        newMessage.classList.add('sent-msg');
    } else {
        newMessage.classList.add('received-msg');
        newMessage.innerText = `${name}: ${message}`;
    }

    messages.appendChild(newMessage);
}

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

// function toggleChat() {
//     chatSection.classList.toggle('show');
//     const matchIdFromUrl = getMatchId();
//     socket.emit('join-room', matchIdFromUrl)
// }

// socket.on("join-room", (message) => {
//     console.log('Room joined');
// })
