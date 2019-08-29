const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes/notes');
const log = require('./notes/time');

fs.appendFileSync('notes.txt', log());

// console.log(
//   chalk.rgb(0, 0, 0).bgYellowBright('>>>>>>>') +
//   chalk.rgb(0, 0, 0).bgGreen('           Success          ') +
//   chalk.rgb(0, 0, 0).bgYellowBright('!!!!!!!')
// );

// console.log(chalk.rgb(0, 0, 0).bgGreen(log()));
yargs.version('0.0.1');

yargs.command({
  command: 'add',
  describe: 'Adiciona uma nova nota',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of the Note',
      demandOption: false,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove uma nota',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'Lista todas as notas',
  handler: function () {
    console.log(chalk.blue('Lista todas as notas'))
  }
})
yargs.command({
  command: 'read',
  describe: 'Leia uma nota',
  handler: function () {
    console.log(chalk.yellow('Leia uma nota'))
  }
})

console.log(yargs.argv)