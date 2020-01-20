// Importamos el submódulo Router
const { Router } = require('express')

// Instanciamos un router
const router = Router()

// Ruta para obtener una lista de las alertas
router.get('/', function (req, res, next) {
    res.send({
        links:  [
            {rel: 'Alertas', href: '/alerts/:clinet_id'}
        ]
    })
})

module.exports = router;
