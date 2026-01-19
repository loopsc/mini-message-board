const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        id: crypto.randomUUID(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        id: crypto.randomUUID(),
    },
];

function getMessageById(id) {
    return messages.find((msg) => msg.id == id);
}

module.exports = { messages, getMessageById };
