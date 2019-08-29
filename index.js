const fs = require('fs');
const chalk = require('chalk');
const getNotes = require('./notes/notes');
const log = require('./notes/time');

fs.writeFileSync('notes.txt', 'Funcionâncio? \n');
fs.appendFileSync('notes.txt', 'Queria saber se o Sr. Funcionâncio está em casa? \n');
fs.appendFileSync('notes.txt', getNotes('Agora estamos elevando os níveis do teste. \n'));
fs.appendFileSync('notes.txt', log());

console.log(
  chalk.rgb(0, 0, 0).bgYellowBright('>>>>>>>') +
  chalk.rgb(0, 0, 0).bgGreen('           Success          ') +
  chalk.rgb(0, 0, 0).bgYellowBright('!!!!!!!')
)
// console.log(chalk.blue.bgWhite(log()));
console.log(chalk.rgb(250, 250, 250).underline("Marcio Mafideju Rodrigues"));
console.log(chalk.rgb(250, 250, 250).underline("                      mafideju@outlook.com"));
console.log(chalk.rgb(0, 0, 0).bgGreen(log()));