// Importamos el submódulo Router
const { Router } = require('express')

// Instanciamos un router
const router = Router()

// Ruta para obtener una lista de los dispositivos registrados
router.get('/', function (req, res, next) {
    res.send({
        links:  [
            {rel: 'Dispositivos', href: '/devices/:dev_id'}
        ]
    })
})

module.exports = router;
