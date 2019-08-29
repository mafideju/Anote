const fs = require('fs');
const chalk = require('chalk');

const getNotes = nota => `Sua nota do dia é: ${nota}`;

const addNote = (title, body) => {
  // debugger;
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

const removeNote = title => {
  const notes = loadNotes();
  const match = notes.filter(note => {
    return note.title !== title;
  });
  if (notes.length === match.length) {
    console.log(chalk.red.bgYellow('Nenhuma Nota Removida'))
  } else {
    console.log(chalk.red('Nota Removida Com Sucesso'))
    saveNote(match);
  }
}

const listNotes = () => {
  const notes = loadNotes();
  return notes.map(note => {
    console.log(`Produto: ${note.title} - Conteúdo: ${note.body}`)
  });
}

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title.title);
  console.log(`O título da sua nota é ${note.title}. Ela contém ${note.body}`)
}

const saveNote = note => {
  const data = JSON.stringify(note);
  fs.writeFileSync('./data/json-data.json', data);
}

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync('./data/json-data.json');
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
  listNotes: listNotes,
  readNote: readNote,
};