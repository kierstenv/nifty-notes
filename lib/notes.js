const fs = require('fs');
const path = require('path');

const filterByQuery = (query, notes) => {
  let fileredNotes = notes;
  if (query) {
    fileredNotes = notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()));
  }
  return fileredNotes;
}

const findById = (id, notes) => {
  const note = notes.find(note => note.id === id);
  return note;
}

const createNewNote = (body, notes) => {
  const note = body;
  notes.push(note);
  fs.writeFileSync(path.join(__dirname, '../db/notes.json'), JSON.stringify({notes}, null, 2));
  return note;
}

const updateNote = (body, notes) => {
  const note = body;
  const noteIndex = notes.findIndex(note => note.id === note.id);
  notes[noteIndex] = note;
  fs.writeFileSync(path.join(__dirname, '../db/notes.json'), JSON.stringify({notes}, null, 2));
  return note;
}

const deleteNote = (id, notes) => {
  const noteIndex = notes.findIndex(note => note.id === id);
  notes.splice(noteIndex, 1);
  fs.writeFileSync(path.join(__dirname, '../db/notes.json'), JSON.stringify({notes}, null, 2));
}

module.exports = {
  filterByQuery,
  findById,
  createNewNote,
  updateNote,
  deleteNote
}