'use strict'

// Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Definimos el esquema
const resourceSchema = new mongoose.Schema({
    _id: {
        type: ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    name: {
        type: String,
        unique: true,
        required: true,
    },
    devices: [{
        type: ObjectId,
        ref: 'Device'
    }],
    geofence: [{ 
        lat: Number,
        lon: Number
    }],
    created: {
        type: Date,
        default: Date.now(),
        required: true,
    },
})

// Definimos el modelo
const resourceModel = mongoose.model('Zones', resourceSchema)

module.exports = resourceModel;