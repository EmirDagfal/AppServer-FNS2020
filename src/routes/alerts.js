'use strict'

// Importamos el submódulo Router
const { Router } = require('express')

// Instanciamos un router
const router = Router()

// Importamos los controladores
const controller = require('../controllers/alerts')

// Rutas de alertas en general
router.options('/', (req, res, next) => {
    res.header('Allow', 'POST, GET').send();
})
router.post('/', controller.post)
router.get('/', controller.get)
// router.patch('/', controller.patch)
// router.delete('/', controller.delete)

// Rutas de alertas especificas
router.options('/:_id', (req, res, next) => {
    res.header('Allow', 'POST, GET, PATCH, DELETE').send();
})
router.post('/:_id', controller.post)
router.get('/:_id', controller.get)
router.patch('/:_id', controller.patch)
router.delete('/:_id', controller.delete)

module.exports = router;
