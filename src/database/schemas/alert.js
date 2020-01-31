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
        required: true,
    },
    type: {type: String, uppercase: true, enum: ['POWER', 'COMMUNICATION'], default: 'POWER'},
    viewed: {type: Boolean, default: false},
    timestamp: {
        type: Date,
        default: Date.now
    },
})

const alertModel = mongoose.model('Alerts', alertSchema)

const alert = {}

// Creamos una alerta
alert.create = function(req, res, next){
    log.info('Creando alerta')

    let body = req.body;
    let instance = new alertModel();
    instance.type = body.type;
    instance.viewed = body.viewed;

    instance.save((err, alertStored) => {
        if(err){
            log.error('Error al crear la alerta')
            res.status(500).send(err)
        }else{
            log.info('Alerta creada exitosamente')
            res.status(201).send(alertStored)
        }
    })
}

// Leemos aleta/s
alert.read = function(req, res, next){

    let _id = req.params._id
    if(_id){
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

        log.info('Leyendo alertas')

        let alertConsult = {}
        const query = req.query;
        let dev_id = req.params.dev_id
        if(dev_id){
            alertConsult.dev_id = dev_id;
        }

        if (Object.keys(query).length > 0) {
            for (let param in query) {
                alertConsult[param] = query[param]
            }
        }

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
        log.error(`Error: ID ${_id} incorrecto`)
    }
}

module.exports = alert;
// module.exports = alertModel;