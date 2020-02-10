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
    apps: [{
        type: Schema.Types.ObjectId, 
        ref: 'App'
    }],
}, {
    timestamps: true
})
// Definimos el modelo
const resourceModel = mongoose.model('Clients', resourceSchema)

module.exports = resourceModel;