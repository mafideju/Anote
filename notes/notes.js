const fs = require('fs');
const chalk = require('chalk');

const getNotes = (nota) => {
  return `Sua nota do dia é: ${nota}`
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const dups = notes.filter(note => {
    return note.title === title;
  });
  if (dups.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    console.log(chalk.green('Nota Adicionada Com Sucesso'))
    saveNote(notes);
  } else {
    console.log(chalk.red('Já exite uma nota com esse título!!!'))
  }
}

const removeNote = (note) => {
  const notes = loadNotes();
  const match = notes.filter(note => {
    return notes.title !== note.title
  });
}

const saveNote = (note) => {
  const data = JSON.stringify(note);
  fs.writeFileSync('json-data.json', data);
}

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync('json-data.json');
    const data = buffer.toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};