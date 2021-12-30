const chalk = require('chalk')
const getNotes = require('./notes')


const msg = getNotes()

console.log(msg)

console.log(chalk.blue.bold.bgRed('Success!!'))
