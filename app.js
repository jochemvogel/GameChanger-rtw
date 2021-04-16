require("dotenv").config();

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 4000;

const adminRoutes = require("./routes/admin");
const matchesRoutes = require("./routes/matches");

// const clientPath = "./client";

app.set("view engine", "ejs");
app.set("views", "views");

/* MIDDLEWARE */
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// express.static("public");

const middlewares = [
    bodyParser.urlencoded({ extended: false }),
    cookieParser(),
    express.static("public"),
];

app.use(middlewares);

app.use("/admin", adminRoutes);
app.use(matchesRoutes);

app.use((req, res, next) => {
    // One year cache header
    res.setHeader("Cache-Control", "max-age=" + 365 * 24 * 60 * 60);
    next();
});

// Static blog route
app.get("/blog", (req, res) => {
    res.sendFile(__dirname + `/client/public/blog.html`);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
