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
    EUI: {
        type: String,
        maxlength: 64
    } // 64 bytes
    // created: {
    //     type: Date,
    //     default: Date.now(),
    //     required: true,
    // },
}, {
    timestamps: true
})
// Definimos el modelo
const resourceModel = mongoose.model('Devices', resourceSchema)

module.exports = resourceModel;