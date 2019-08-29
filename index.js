const fs = require('fs');
const chalk = require('chalk');
const getNotes = require('./notes/notes');
const log = require('./notes/time');

fs.writeFileSync('notes.txt', 'Funcionâncio? \n');
fs.appendFileSync('notes.txt', 'Queria saber se o Sr. Funcionâncio está em casa? \n');
fs.appendFileSync('notes.txt', getNotes('Agora estamos elevando os níveis do teste. \n'));
fs.appendFileSync('notes.txt', log());

console.log(
  chalk.bgMagentaBright('>>>>>>>') +
  chalk.bgGreen('           Sucesso          ') +
  chalk.bgMagentaBright('!!!!!!!')
)
// console.log(chalk.blue.bgWhite(log()));
console.log(chalk.rgb(123, 145, 167).underline("Marcio Mafideju Rodrigues"));
console.log(chalk.white.bgRed.bold(log()));