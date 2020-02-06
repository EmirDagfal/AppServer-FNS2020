'use strict'

// Servidor
const http = require('http')
// Aplicacion de express
const app = require('./src/app')
// Logger de colores
const chalk = require('chalk');


// Lee las variables de entorno definidas en el archivo .env
// El archivo .env-example muestra un ejemplo practico de definicion de variables de entorno
require('dotenv').config();

// Conexion de la base de datos
const mongoose = require('mongoose');
let db_uri = `${ process.env.MONGODB_URI}` || 'mongodb://localhost:27017/luminarias';
console.log("Conectando a " + db_uri)

mongoose.connect(db_uri, function (err) {

    // Error de conexion con base de datos
    if (err){
        console.log(chalk.black.bgRed("Error al conectar con la base de datos"))
        console.log(err)
        throw err;
    }

    // Conexion exitosa
    console.log(chalk.black.bgGreen(`Base de datos ${ db_uri || 'mongodb://localhost:27017/luminarias' }`));

    // Creamos un nuevo servidor con nuestra app
    const server = http.createServer(app)

    server.on('listening', function() {
        console.info(chalk.black.bgBlue(`Servidor escuchando en ${process.env.SERVER_URL || 'http://localhost'}` + ':' + `${process.env.SERVER_PORT || '3000'}`))
    })

    // Ponemos a escuchar nuestro servidor en el SERVER_PORT
    server.listen( process.env.SERVER_PORT || '3000' );
});


