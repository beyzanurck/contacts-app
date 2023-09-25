import express from 'express';
import 'dotenv/config'
import db from "./db/db-connection.js";

const app = express();
const PORT = 1212;


app.get("/", (req, res) => {
    res.json("Welcome to the Contact App");
});

const test = await db.query('SELECT * FROM contacts')
console.log("table: ", test)

app.listen(PORT, () => console.log(`HELLOO! Server running on Port http://localhost:${PORT}`));