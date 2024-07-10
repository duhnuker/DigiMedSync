import express from "express";
import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "digimedsync",
    password: "Tuna1576",
    port: 5432,
  });

const app = express();
const port = 3000;

db.connect();


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});