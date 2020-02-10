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
        maxlength: 20,
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