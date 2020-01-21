'use strict'

// Importamos el submódulo Router
const { Router } = require('express')

// Instanciamos un router
const router = Router()

// Ruta para obtener una lista de las zonas
router.get('/', function (req, res, next) {
    res.send({
        links:  [
            {rel: 'Dispositivos', href: '/zones/:zone_id'}
        ]
    })
})

module.exports = router;
