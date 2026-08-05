
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let notes = [];
let nextId = 1;

// GET
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// POST
app.post("/api/notes", (req, res) => {

  const newNote = {
    id: nextId++,
    title: req.body.title,
    content: req.body.content,
    createdAt: new Date()
  };

  notes.push(newNote);

  res.status(201).json(newNote);

});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});