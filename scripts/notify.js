const socket = require('socket.io-client')(process.env.SOCKET_IO_SERVER);

socket.on('connect', function(){
    socket.emit('message', {
        type: 'match-update'
    });
    socket.disconnect();
});
