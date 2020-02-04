'use strict'

// Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Definimos el esquema
const resourceSchema = new mongoose.Schema({
    dev_id: { 
        type: ObjectId,
        ref: 'Devices',
        required: true,    // TODO cambiar a true
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

// Definimos el modelo
const resourceModel = mongoose.model('Alerts', resourceSchema)

module.exports = resourceModel;