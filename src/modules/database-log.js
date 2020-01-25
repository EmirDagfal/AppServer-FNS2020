// Logger de colores
const chalk = require('chalk');
const log = {};

log.info = function(mje){
    console.log(chalk.magenta(mje))
}

log.error = function(mje){
    console.log(chalk.magenta.bgRed(mje))
}

module.exports = log;