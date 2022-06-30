const router = require('express').Router();
const { filterByQuery, createNewNote, updateNote, deleteNote } = require("../../lib/notes");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  const savedNotes = notes;
  res.json(savedNotes);
});

module.exports = router;