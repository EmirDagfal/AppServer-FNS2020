'use strict'

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
        nombre: 'API Database Luminarias',
        descripcion: 'API de gestion de Base de Datos de Luminarias de Alumbrado Publico',
        version: '1.0.1',
        links:  [
            {rel: 'Documentacion', href: '/docs'},
            {rel: 'Alertas', href: '/alerts'},
            {rel: 'Aplicaciones', href: '/apps'},
            {rel: 'Clientes', href: '/clients'},
            {rel: 'Dispositivos', href: '/devices'},
            {rel: 'Zonas', href: '/zones'},
        ]
    })
})
app.options('/', (req, res, next) => {
    res.header('Allow', 'GET').send();
})

// Redireccionamos las rutas aqui
const alertsRoute = require('./routes/alerts')
app.use('/alerts', alertsRoute);
const appsRoute = require('./routes/apps')
app.use('/apps', appsRoute);
const clientsRoute = require('./routes/clients')
app.use('/clients', clientsRoute);
const dataRoute = require('./routes/data')
app.use('/data', dataRoute);
const devicesRoute = require('./routes/devices')
app.use('/devices', devicesRoute);
const zonesRoute = require('./routes/zones')
app.use('/zones', zonesRoute);
const zone_groupsRoute = require('./routes/zone_groups')
app.use('/zone_groups', zone_groupsRoute);

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
