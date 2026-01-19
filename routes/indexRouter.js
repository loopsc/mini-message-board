const { Router } = require("express");
const { messages } = require("../db");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", {
        title: "Mini Messageboard",
        messages: messages,
    });
});

indexRouter.get("/messages/:messageId", (req, res) => {
    res.render("message", {
        messageId: req.params.messageId,
    });
});

indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.post("/new", (req, res) => {
    let messageName = req.body.messageName;
    let messageText = req.body.messageText;

    messages.push({ text: messageText, user: messageName, added: new Date() });

    res.redirect("/");
});

module.exports = indexRouter;
