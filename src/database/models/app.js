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
    version: {
        type: String,
        required: true,
        maxlength: 20,
    },
    // client_id: {},
    type: {
        type: String,
    },
    tecnology: {
        type: String,
    },
    hardware: {
        type: String,
    },
    description: {
        type: String,
        maxlength: 140
    } // maximo 140 caracteres
}, {
    timestamps: true
})

// Definimos el modelo
const resourceModel = mongoose.model('Apps', resourceSchema)

module.exports = resourceModel;