'use strict'

const Schema = require('mongoose').Schema;

const schemas = {
    dataSchema: new Schema({
        dev_id: {
            type: Schema.Types.ObjectId, 
            ref: 'Device',
            required: true,
        },
        // TODO:
        // Posibles funciones a implementar:
        // -    get: v => Math.round(v),
        // -    set: v => Math.round(v),
        power: {
            type: Number,
            min: 0
        },  // float >= 0
        energy: {
            type: Number,
            min: 0
        }, // float >= 0
        dimming: {
            type: Number,
            min: 0,
            max: 100
        },    // 0-100
        time: {
            type: Date,
            default: Date.now,
            required: true,
        },
    })
};

module.exports = schemas;