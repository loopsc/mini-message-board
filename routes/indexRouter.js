const { Router } = require("express");
const { messages } = require("../db");
const { getMessageById } = require("../controllers/messagesController");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", {
        title: "Message Board",
        messages: messages,
    });
});

indexRouter.get("/messages/:messageId", (req, res) => {
    const message = getMessageById(req.params.messageId);

    if (!message) return res.status(404).send("Message not found");

    res.render("message", {
        message,
    });
});

indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.post("/new", (req, res) => {
    let messageName = req.body.messageName;
    let messageText = req.body.messageText;
    let id = crypto.randomUUID();

    messages.push({
        text: messageText,
        user: messageName,
        added: new Date(),
        id: id,
    });

    res.redirect("/");
});

module.exports = indexRouter;
