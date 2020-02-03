'use strict'

const mongoose = require('..');
Schema = mongoose.Schema;

const schemas = {
    zoneSchema: new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            unique: true,
            required: true,
        },   // unico
        zones: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Zone',
            required: true,
        }],
    })
};

module.exports = schemas;