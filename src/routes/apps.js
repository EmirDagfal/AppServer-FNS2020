// Importamos el submódulo Router
const { Router } = require('express')

// Importamos los modelos de la base de datos
const models = require('../database/models');
const mongoose = require('mongoose');

// Instanciamos un router
const router = Router()

// Ruta para obtener una lista de las aplicaciones
router.get('/', function (req, res, next) {
    res.send({
        links:  [
            {rel: 'Aplicaciones', href: '/apps/:client_id'}
        ]
    })
})

// Ruta para crear una aplicacion
router.post('/', function (req, res, next) {
    const data = req.body;

    console.log(data);
    let newApp = new models.App ({
        name = data.name,
        _id: new mongoose.Types.ObjectId(),
        version = data.version
    });

    newApp.save(function(err) {
        if (err) throw err;
         
        res.header('Location', `/apps/${newApp._id}`)
            .status(201)
            .send()
        console.log('Aplicacion creada exitosamente');
    });

})

module.exports = router;
