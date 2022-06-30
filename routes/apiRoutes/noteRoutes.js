const router = require('express').Router();
const { filterByQuery, findById, createNewNote, deleteNote } = require("../../lib/notes");
const { notes } = require("../../db/notes.json");

router.get("/notes", (req, res) => {
  const savedNotes = notes;
  res.json(savedNotes);
});

router.get("/notes/:id", (req, res) => {
  const noteId = req.params.id;
  const note = findById(noteId, notes);
  res.json(note);
});

router.post("/notes", (req, res) => {
  const { body } = req;
  const newNote = createNewNote(body, notes);
  res.json(newNote);
});

router.put("/notes/:id", (req, res) => {
  const noteId = req.params.id;
  const { body } = req;
  const updatedNote = updateNote(body, notes);
  res.json(updatedNote);
});

router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id;
  deleteNote(noteId, notes);
  res.json({ message: "Note deleted." });
});

module.exports = router;