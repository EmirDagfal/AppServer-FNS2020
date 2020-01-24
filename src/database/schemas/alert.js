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
    // console.log(body);

    let instance = new alertModel();
    instance.type = body.type;
    instance.viewed = body.viewed;
    // console.log(instance)
    
    
    instance.save(next)
    
}

module.exports = alert;