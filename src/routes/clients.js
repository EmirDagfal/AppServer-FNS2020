'use strict'

// Importamos el submódulo Router
const { Router } = require('express')

// Instanciamos un router
const router = Router()

// Acciones permitidas sobre la ruta
router.options('/', (req, res, next) => {
    res.header('Allow', 'PUSH, GET, PATCH, DELETE').send();
})

// Ruta para obtener una lista de los clientes
router.get('/', function (req, res, next) {
    res.send({
        links:  [
            {rel: 'Cliente', href: '/clients/:client_id'}
        ]
    })
})

// Ruta para obtener informacion de un cliente especifico
router.get('/', function (req, res, next) {

})

module.exports = router;
