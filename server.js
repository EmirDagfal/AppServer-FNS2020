const http = require('http')
const app = require('./src/app')

// Creamos un nuevo servidor con nuestra app
const server = http.createServer(app)

// Configuracion del servidor y del puerto
const port = 3000;
const server_url = 'http://localhost'

server.on('listening', function() {
    console.info(`Servidor escuchando en ${server_url+':'+port}`)
})

// Ponemos a escuchar nuestro servidor en el puerto 3000
server.listen(port)