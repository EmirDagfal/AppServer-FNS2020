'use strict'

// Importamos el submódulo Router
const { Router } = require('express')

// Instanciamos un router
const router = Router()

// Acciones permitidas sobre la ruta
router.options('/', (req, res, next) => {
    res.header('Allow', 'PUSH, GET, PATCH, DELETE').send();
})

// Ruta para obtener una lista de las zonas
router.get('/', function (req, res, next) {
    res.send({
        links:  [
            {rel: 'Dispositivos', href: '/zones/:zone_id'}
        ]
    })
})

// Ruta para obtener informacion de una zona especifica
router.get('/', function (req, res, next) {

})

module.exports = router;
