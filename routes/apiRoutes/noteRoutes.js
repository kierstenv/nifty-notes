const router = require('express').Router();
const { getNotes, saveNote, addNote, deleteNote } = require("../../public/assets/js/index.js");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  const savedNotes = notes;
  res.json(savedNotes);
});

