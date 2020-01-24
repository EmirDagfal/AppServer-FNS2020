'use strict'

// Importamos el submódulo Router
const { Router } = require('express')

// Instanciamos un router
const router = Router()

// Acciones permitidas sobre la ruta
router.options('/', (req, res, next) => {
    res.header('Allow', 'POST, GET, PATCH, DELETE').send();
})

// Importamos los controladores
const controller = require('../controllers/alerts')

// Rutas principales
router.post('/', controller.post)
router.get('/', controller.get)
router.patch('/', controller.patch)
router.delete('/', controller.delete)

module.exports = router;
