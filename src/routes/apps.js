'use strict'

// Importamos el submódulo Router
const { Router } = require('express')

// Importamos los modelos de la base de datos
// const models = require('../database/models');
// const mongoose = require('mongoose');

// Instanciamos un router
const router = Router()

// Acciones permitidas sobre la ruta
router.options('/', (req, res, next) => {
    res.header('Allow', 'PUSH, GET, PATCH, DELETE').send();
})

// Ruta para obtener una lista de las aplicaciones
router.get('/', function (req, res, next) {
    res.send({
        links:  [
            {rel: 'Aplicacion', href: '/apps/:app_id'},
        ]
    })
})

// Ruta para obtener informacion de una aplicacion especifica
router.get('/:app_id', function (req, res, next) {

})

module.exports = router;
