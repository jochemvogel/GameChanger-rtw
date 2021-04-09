const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 4000;

const adminRoutes = require("./routes/admin");
const matchesRoutes = require("./routes/matches");

const clientPath = "./client";

app.set("view engine", "ejs");
app.set("views", `${clientPath}/views`);

/* MIDDLEWARE */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, `${clientPath}/public`)));

app.use("/admin", adminRoutes);
app.use(matchesRoutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
