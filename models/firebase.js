const firebase = require('firebase');

const firebaseConfig = {
    apiKey: process.env.DB_API_KEY,
    authDomain: 'gamechangers-rtw.firebaseapp.com',
    projectId: 'gamechangers-rtw',
    databaseURL:
        'https://gamechangers-rtw-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'gamechangers-rtw.appspot.com',
    messagingSenderId: '906628716101',
    appId: '1:906628716101:web:87b00ef72d02005857752c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
