// Importamos express
const express = require('express')

// Importamos los middleware necesarios
const morgan = require('morgan')
const bodyParser = require('body-parser')

// Instanciamos una app de Express
const app = express()

// Proteccion contra distintos ataques
const helmet = require('helmet')
app.use(helmet())


// Utilizamos los middleware
app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    res.send({
        nombre: 'API Luminarias',
        descripcion: 'API de Telegestion de Luminarias de Alumbrado Publico en el contexto de la Fiesta Nacional del Sol 2020',
        version: '1.0.0',
        links:  [
            {rel: 'Dispositivos', href: '/devices'}
        ]
    })
})

// Redireccionamos las rutas aqui
const devicesRoute = require('./routes/devices')
app.use('/devices', devicesRoute);

const appsRoute = require('./routes/apps')
app.use('/apps', appsRoute);

// Documentacion de la API
const swaggerUi = require('swagger-ui-express');
const apiDocs = require('../docs/openapi');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDocs));

// Establecemos el middleware para manejo de error 404
app.use((req, res, next) => {
    res.status(404)
        .send({
            error: 'Recurso no encontrado',
        })
})

// Establecemos el middleware para manejo de error 500
app.use((err, req, res, next) => {
    res.status(500)
        .send({
            error: err.message,
        })
})

// Exportamos nuestra app
module.exports = app
