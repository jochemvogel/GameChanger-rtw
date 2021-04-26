/* Socket Setup */
const isDevelopment = document.location.host.includes("localhost");
const socket = isDevelopment
    ? io(`http://localhost:1234/`)
    : io(`https://gamechanger-wss.herokuapp.com/`);

let subscribedMatchesArrInLS = localStorage.getItem('subscribedMatches')

if (subscribedMatchesArrInLS === null) {
    var array = [1, 2, 3];
    localStorage.setItem('subscribedMatches', JSON.stringify(array));
}
