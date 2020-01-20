// Importamos el submódulo Router
const { Router } = require('express')

// Instanciamos un router
const router = Router()

// Ruta para obtener una lista de los clientes
router.get('/', function (req, res, next) {
    res.send({
        links:  [
            {rel: 'Clientes', href: '/clients/:client_id'}
        ]
    })
})

module.exports = router;
