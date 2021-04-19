const isDevelopment = document.location.host.includes("localhost");
const socket = isDevelopment
    ? io(`http://localhost:1234/`)
    : io(`https://gamechanger-wss.herokuapp.com/`);
