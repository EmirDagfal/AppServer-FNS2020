// Logger de colores
const chalk = require('chalk');
const log = function(mje){
    console.log(chalk.magenta(mje))
}

module.exports = log;