const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const validationRules = [
    body("messageName")
        .trim()
        .isLength({ min: 1, max: 20 })
        .withMessage("Name must be between 1-20 characters"),
    body("messageText")
        .trim()
        .isLength({ min: 1, max: 200 })
        .withMessage("Text must be between 1-200 characters"),
];

async function getAllMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", {
        title: "Message Board",
        messages: messages,
    });
}

async function getMessageById(req, res) {
    const message = await db.getMessagesById(req.params.messageId);

    if (!message) return res.status(404).send("Message not found");

    res.render("message", {
        message,
    });
}

async function getCreateMessage(req, res) {
    res.render("form");
}

const postCreateMessage = [
    validationRules,
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).render("form", {
                    errors: errors.array(),
                    oldInput: req.body,
                });
            }
            const { messageName, messageText } = matchedData(req);
            await db.insertMessage(messageName, messageText);
            res.redirect("/");
        } catch (err) {
            next(err)
        }
    },
];

module.exports = {
    getMessageById,
    getAllMessages,
    getCreateMessage,
    postCreateMessage,
};
