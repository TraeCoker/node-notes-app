const chalk = require('chalk')
const getNotes = require('./notes')


const msg = getNotes()

console.log(msg)

console.log(chalk.green.bold.inverse('Success!!'))
