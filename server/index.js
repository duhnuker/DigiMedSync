import 'dotenv/config';
//environment variables to automatically update port values and import database config
import express from "express";
import pg from "pg";

const db = new pg.Client();

const app = express();
const port = process.env.PORT || 3001;

db.connect();

// Get home page
app.get("/", async (req, res) => {
  console.log("Hello");
  res.status(200).json({
    status: "success",
    data: {
      random: ["I am Dinuka"],
    },
  });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});