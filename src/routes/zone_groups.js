'use strict'

// Importamos el submódulo Router
const { Router } = require('express')

// Instanciamos un router
const router = Router()

// Acciones permitidas sobre la ruta
router.options('/', (req, res, next) => {
    res.header('Allow', 'PUSH, GET, PATCH, DELETE').send();
})

// Ruta para obtener una lista de los grupos de zonas
router.get('/', function (req, res, next) {
    res.send({
        links:  [
            {rel: 'Dispositivos', href: '/zones/:zone_id'}
        ]
    })
})

// Ruta para obtener informacion de un grupo de zonas especifico
router.get('/', function (req, res, next) {

})

module.exports = router;
