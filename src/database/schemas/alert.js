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
        ref: 'Devices'
    },
    type: {type: String, uppercase: true, enum: ['POWER', 'COMMUNICATION']}, // [POWER COMMUNICATION]
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
            res.status(500).send({message: `Error al crear la alerta: ${err}`})
        }
        log('Alerta creada exitosamente')
        console.log(alertStored)
        res.status(201).send(alertStored)
    })
    
}

module.exports = alert;
// module.exports = alertModel;