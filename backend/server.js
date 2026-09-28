const db=require("./db");
const express = require("express");
const cors=require("cors");

const app = express();
const PORT = 5000;
app.use(cors());

app.get("/", (req, res) => {
    res.send("Quiz backend is working!");
});


app.get("/api/questions", (req, res) => {
    const sql = "SELECT * FROM questions";

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Database error" });
            return;
        }

        res.json(results);
    });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});