const db = require("../db/queries")

async function getAllMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", {
        title: "Message Board",
        messages: messages
    })
}

async function getMessageById(req, res) {
    const message = await db.getMessagesById(req.params.messageId);

    if (!message) return res.status(404).send("Message not found");

    res.render("message", {
        message
    });
}

async function getCreateMessage(req, res) {
    res.render("form");
}

async function postCreateMessage(req, res) {
    let messageName = req.body.messageName;
    let messageText = req.body.messageText;

    await db.insertMessage(messageName, messageText)

    res.redirect("/")
}

module.exports = { getMessageById, getAllMessages, getCreateMessage, postCreateMessage };
