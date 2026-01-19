const { Router } = require("express");
const { messages } = require("../db");
const indexRouter = Router();

const links = [
    { href: "/", text: "Home Feed" },
    { href: "/new", text: "New Message" },
];

indexRouter.get("/", (req, res) => {
    res.render("index", {
        title: "Mini Messageboard",
        messages: messages,
        links: links,
    });
});
indexRouter.get("/new", (req, res) => {
    res.render("form", { links: links });
});
indexRouter.post("/new", (req, res) => {
    let messageName = req.body.messageName;
    let messageText = req.body.messageText;

    messages.push({ text: messageText, user: messageName, added: new Date() });

    res.redirect("/");
});

module.exports = indexRouter;
