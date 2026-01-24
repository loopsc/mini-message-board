require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes/indexRouter");
const app = express();
// Configure EJS
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// For serving css
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
// Parse form data
app.use(express.urlencoded({ extended: true }));

app.locals.links = [
    { href: "/", text: "Home Feed" },
    { href: "/new", text: "New Message" },
];

app.use("/", indexRouter);

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log("App started successfully");
});
