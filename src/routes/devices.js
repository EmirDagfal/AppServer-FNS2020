// Importamos el submódulo Router
const { Router } = require('express')

// Instanciamos un router
const router = Router()

// Ruta para obtener una lista de los dispositivos registrados
router.get('/', function (req, res, next) {
    res.send("lista de dispositivos")
})

module.exports = router;
