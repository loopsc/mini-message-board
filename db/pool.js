const { Pool } = require("pg");

const pool = new Pool(
    process.env.DATABASE_URL
        ? { connectionString: process.env.DATABASE_URL }
        : {
              host: process.env.DB_HOST,
              user: process.env.DB_USER,
              database: process.env.DB_NAME,
              password: process.env.DB_PASSWORD,
              port: Number(process.env.DB_PORT),
          },
);

module.exports = pool;
