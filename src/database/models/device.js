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
    type: {
        type: String,
        uppercase: true,
        enum: ['LORA'],
        required: true,
    },    // TODO agregar otros tipos de apps [LORA ZB WIFI]
    client_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Client',
        required: true,
    },
    app_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'App',
        required: true,
    },
    location: {
        lat: Number,
        lon: Number
    },
    created: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    EUI: {
        type: String,
        maxlength: 64
    } // 64 bytes
}, {
    timestamps: true
})
// Definimos el modelo
const resourceModel = mongoose.model('Devices', resourceSchema)

module.exports = resourceModel;