import 'dotenv/config';
//environment variables to automatically update port values
import express from "express";
import db from './db/index.js';

const app = express();
const port = process.env.PORT || 3001;

// Get home page
app.get("/", (req, res) => {
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});