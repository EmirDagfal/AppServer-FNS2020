// Servidor
const http = require('http')
// Aplicacion de express
const app = require('./src/app')
// Logger de colores
const chalk = require('chalk');


// Lee las variables de entorno definidas en el archivo .env
require('dotenv').config();

// Conexion de la base de datos
const mongoose = require('mongoose');
console.log(chalk.bgMagenta(`${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`));

mongoose.connect(`${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`, function (err) {

    // Error de conexion con base de datos
    if (err){
        console.log(chalk.black.bgRed("Error al conectar con la base de datos"))
        throw err;
    }

    // Conexion exitosa
    console.log(chalk.black.bgGreen(`Base de datos ${process.env.DB_NAME} escuchando en ${process.env.DB_URL}:${process.env.DB_URL}`));

    // Creamos un nuevo servidor con nuestra app
    const server = http.createServer(app)

    server.on('listening', function() {
        console.info(chalk.black.bgBlue(`Servidor escuchando en ${process.env.SERVER_URL+':'+process.env.SERVER_PORT}`))
    })

    // Ponemos a escuchar nuestro servidor en el SERVER_PORT
    server.listen(process.env.SERVER_PORT);
});


