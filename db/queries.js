const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function getMessageById(id) {
    const message = await pool.query(
        "SELECT * FROM messages WHERE id = ($1);",
        [id],
    );
    return message;
}

async function insertMessage(name, text) {
    await pool.query("INSERT INTO messages (username, text) VALUES ($1,$2)",[
        name, text
    ])
}


module.exports = { getAllMessages, getMessageById, insertMessage };
