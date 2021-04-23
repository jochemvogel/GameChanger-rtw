require('dotenv').config();
var firebase = require('firebase/app');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

const adminRoutes = require('./routes/admin');
const matchesRoutes = require('./routes/matches');

app.set('view engine', 'ejs');
app.set('views', 'views');

const middlewares = [
    bodyParser.urlencoded({ extended: false }),
    express.static('public'),
];

app.use(middlewares);

app.use('/admin', adminRoutes);
app.use(matchesRoutes);

// Uncomment when versioned assets (CSS/JS) works
// app.use((req, res, next) => {
//     // One year cache header
//     res.setHeader("Cache-Control", "max-age=" + 365 * 24 * 60 * 60);
//     next();
// });

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
