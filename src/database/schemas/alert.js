'use strict'

// Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Log
const log = require('../../modules/database-log');
// Esquema del recurso Alert
const alertSchema = new mongoose.Schema({
    dev_id: { 
        type: ObjectId,
        ref: 'Devices',
        required: false,
    },
    type: {
        type: String,
        uppercase: true,
        enum: ['POWER', 'COMMUNICATION'],
        default: 'POWER',
        required: true,
    },
    code: {
        type: String,
        required: true,
        default: "001"
    },
    viewed: {
        type: Boolean,
        default: false
    },
    time: {
        type: Date,
        default: Date.now,
        required: true,
    },
})

const alertModel = mongoose.model('Alerts', alertSchema)

const alert = {}

// Creamos una alerta
alert.create = function(req, res, next){
    log.info('Creando alerta')

    let body = req.body;
    let instance = new alertModel();

    // if ((query).length > 0) {
    //     for (let param in query) {
    //         alertConsult[param] = query[param]
    //     }
    // }
    
    if(Object.keys(body).length > 0){
        for (let param in body) {
            instance[param] = body[param]
        }
    }
    console.log(instance)
    // instance.type = body.type;
    // instance.viewed = body.viewed;

    instance.save((err, alertStored) => {
        if(err){
            log.error('Error al crear la alerta')
            res.status(500).send(err)
        }else{
            log.info('Alerta creada exitosamente')
            console.log(alertStored)
            res.status(201).send(alertStored)
        }
    })
}

// Leemos aleta/s
alert.read = function(req, res, next){

    let _id = req.params._id
    if(_id){
        // Lectura de alerta por id
        log.info(`Leyendo alerta ${_id}`)
        alertModel.findById(_id, function (err, alerRead) {
            if(err){
                log.error('Error al leer la alerta')
                res.status(500).send(err)
            }else{
                log.info('Alerta leida exitosamente')
                res.status(200).send(alerRead)
            }
        })
    }else{
        // Lectura general de alertas
        log.info('Leyendo alertas')

        let alertConsult = {}
        const query = req.query;

        // Filtro de tiempo desde-hasta from-to
        if(query.from || query.to){
            if(query.from && query.to){
                alertConsult.time = {
                    $gte: new Date(query.from),
                    $lte: new Date(query.to)
                }
            }else if(query.from){
                alertConsult.time = {
                    $gte: new Date(query.from),
                }
            }else{
                alertConsult.time = {
                    $lte: new Date(query.to)
                }
            }
        }

        // Leemos las propiedades del modelo
        let props = Object.keys(alertModel.schema.paths)
        // Filtramos las propiedades que no pertenecen al modelo
        if (Object.keys(query).length > 0) {
            for (let param in query) {
                for (let property in props){
                    if(property == param)   alertConsult[param] = query[param]
                }
            }
        }

        // Busqueda en la base de datos
        alertModel.find(alertConsult, function (err, alerRead) {
            if(err){
                log.error('Error al leer las alertas')
                res.status(500).send(err)
            }else{
                log.info('Alertas leidas exitosamente')
                res.status(200).send(alerRead)
            }
        })
    }
}

// Actualizo una alerta
alert.update = function(req, res, next){
    let body = req.body;
    
    let _id = req.params._id
    if(_id){
        alertModel.findByIdAndUpdate(_id, body, function (err, alerUpdated) {
            if(err){
                log.error('Error al actualizar la alerta')
                res.status(500).send(err)
            }else{
                log.info('Alertas actualizada exitosamente')
                res.status(200).send(alerUpdated)
            }
        })
    }else{
        log.error(`Error: ID ${_id} incorrecto`)
    }
}

// Elimino una alerta
alert.delete = function(req, res, next){
    let _id = req.params._id
    if(_id){
        alertModel.findByIdAndDelete(_id, function (err, alerDeleted) {
            if(err){
                log.error('Error al eliminar la alerta')
                res.status(500).send(err)
            }else{
                log.info('Alertas eliminada exitosamente')
                res.status(200).send(alerDeleted)
            }
        })
    }else{
        // Eliminacion general de alertas
        log.info('Eliminando alertas')

        let alertConsult = {}
        const query = req.query;

        // Filtro de tiempo desde-hasta from-to
        if(query.from || query.to){
            if(query.from && query.to){
                alertConsult.time = {
                    $gte: new Date(query.from),
                    $lte: new Date(query.to)
                }
            }else if(query.from){
                alertConsult.time = {
                    $gte: new Date(query.from),
                }
            }else{
                alertConsult.time = {
                    $lte: new Date(query.to)
                }
            }
        }

        // Leemos las propiedades del modelo
        let props = Object.keys(alertModel.schema.paths)
        // Filtramos las propiedades que no pertenecen al modelo
        if (Object.keys(query).length > 0) {
            for (let param in query) {
                for (let property in props){
                    if(property == param)   alertConsult[param] = query[param]
                }
            }
        }

        alertModel.deleteMany(alertConsult, function (err, alerRead) {
            if(err){
                log.error('Error al eliminar las alertas')
                res.status(500).send(err)
            }else{
                log.info('Alertas eliminadas exitosamente')
                res.status(200).send(alerRead)
            }
        })
    }
}

module.exports = alert;
// module.exports = alertModel;