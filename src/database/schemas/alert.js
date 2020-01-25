'use strict'

// Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Log
const log = require('../../modules/database-log');

const alertSchema = new mongoose.Schema({
    dev_id: { 
        type: ObjectId,
        ref: 'Devices',
        //required: true,
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
    log('Creando alerta')

    let body = req.body;
    let instance = new alertModel();
    instance.type = body.type;
    instance.viewed = body.viewed;

    instance.save((err, alertStored) => {
        log(err)
        log(alertStored)
        if(err){
            log('Error al crear la alerta')
            res.status(500).send(err)
        }else{
            log('Alerta creada exitosamente')
            res.status(201).send(alertStored)
        }
    })
}

// Leemos aleta/s
alert.read = function(req, res, next){
    log('Leyendo alertas')
    let alertConsult = {}
    const query = req.query;

    if (Object.keys(query).length > 0) {
        for (let param in query) {
            alertConsult[param] = query[param]
        }
    }

    alertModel.find(alertConsult, function (err, alerRead) {
        if(err){
            log('Error al leer las alertas')
            res.status(500).send(err)
        }else{
            log('Alertas leidas exitosamente')
            res.status(200).send(alerRead)
        }
    })
}

// Actualizo una alerta
alert.update = function(req, res, next){

}

// Elimino una alerta
alert.delete = function(req, res, next){

}

module.exports = alert;
// module.exports = alertModel;