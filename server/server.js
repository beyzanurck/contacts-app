import express from 'express';
import 'dotenv/config'
import db from "./db/db-connection.js";

const app = express();
const PORT = 1212;


app.get("/", async (req, res) =>  {
    
    try {
        const {rows : allContacts} = await db.query('SELECT * FROM contacts');
        res.send(allContacts);
        console.log(allContacts)
    } catch (error) {
        console.error("Error Message!:", error.message);
    }
    
});

app.listen(PORT, () => console.log(`HELLOO! Server running on Port http://localhost:${PORT}`));