const db = require("../db");

function getMessageById(messageId) {
    return db.getMessageById(messageId);

}

module.exports = { getMessageById };
