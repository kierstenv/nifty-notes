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
  return notes.find(note => note.id === id);
}

const createNewNote = (body, notes) => {
  const newNote = {
    id: notes.length + 1,
    title: body.title,
    text: body.text,
  };
  notes.push(newNote);
  return newNote;
}

const updateNote = (body, notes) => {
  const note = findById(body.id, notes);
  note.title = body.title;
  note.text = body.text;
  return note;
}

const deleteNote = (id, notes) => {
  const noteIndex = notes.findIndex(note => note.id === id);
  notes.splice(noteIndex, 1);
}