'use strict'

// Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Esquema del recurso Alert
const alertSchema = new mongoose.Schema({
    dev_id: { 
        type: ObjectId,
        ref: 'Devices',
        required: false,    // TODO cambiar a true
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

module.exports = alertModel;