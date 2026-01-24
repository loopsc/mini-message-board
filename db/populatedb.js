require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ) NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);`;

async function main() {
    console.log("Setting up database");
    const client = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT),
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Database setup successfully");
}

main();
