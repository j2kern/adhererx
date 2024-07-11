import express from "express";
import cors from "cors";
import mysql from 'mysql';

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "capstone123",
    database: "testdb"
});

app.use(cors());

app.get('/get_data', (req, res) => {
    const sql = "SELECT * FROM event_data ORDER BY event_timestamp DESC LIMIT 1;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
});

app.listen(8001, () => console.log("Retrieving info from Database!"));
