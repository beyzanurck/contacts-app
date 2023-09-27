import express from 'express';
import 'dotenv/config'
import db from "./db/db-connection.js";
import cors from 'cors';

const app = express();
const PORT = 1212;

app.use(cors());
app.use(express.json()); //req.body

app.get("/", async (req, res) =>  {
    
    try {
        const {rows : allContacts} = await db.query('SELECT * FROM contacts');
        res.send(allContacts);
        console.log(allContacts)
    } catch (error) {
        console.error("Error Message!:", error.message);
    }

});

app.post("/", async (req, res) =>  {
    
    try {
        const {first_name, last_name, email, phone_number, address, image_path } = req.body;

        const newContact = await db.query (
            "INSERT INTO contacts (first_name, last_name, email, phone_number, address, image_path) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [first_name, last_name, email, phone_number, address, image_path]
        );

        res.json(newContact.rows[0])
        
    } catch (error) {
        console.error(error.message)
    }

});

app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deleteContact= await db.query("DELETE FROM contacts WHERE id = $1", [id]
        );

        res.json("The contact was deleted!");

    } catch (error) {
        console.error(error.message)
    }
})

app.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;

      const {first_name, last_name, email, phone_number, address, image_path } = req.body;

      const editedContact = await db.query(
        "UPDATE contacts SET first_name = $1, last_name = $2, email = $3, phone_number = $4, address = $5, image_path = $6 WHERE id = $7 RETURNING *",
        [first_name, last_name, email, phone_number, address, image_path, id]
      );
  
      //res.json(editedContact.rows[0]);
      res.json("Event was updated!");
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    }  
});

app.listen(PORT, () => console.log(`HELLOO! Server running on Port http://localhost:${PORT}`));