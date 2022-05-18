const router = require("express").Router();
const { getNotes, saveNote, addNote, deleteNote } = require("../../public/assets/js/index.js");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let notes = getNotes();
  res.json(notes);
});

router.post("/notes", (req, res) => {
  let newNote = addNote(req.body);
  res.json(newNote);
});

module.exports = router;