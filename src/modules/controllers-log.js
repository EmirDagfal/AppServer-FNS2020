// Logger de colores
const chalk = require('chalk');

const log = {}

log.info = function(mje){
    console.log(chalk.yellow(mje))
}

log.error = function(mje){
    console.log(chalk.yellow.bgRed(mje))
}

module.exports = log;