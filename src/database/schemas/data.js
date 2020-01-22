'use strict'

const mongoose = require('..');
Schema = mongoose.Schema;

const schemas = {
    dataSchema: new Schema({
        dev_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Device'
        },
        // TODO:
        // Posibles funciones a implementar:
        // -    get: v => Math.round(v),
        // -    set: v => Math.round(v),
        power: {type: Number, min: 0},  // float >= 0
        energy: {type: Number, min: 0}, // float >= 0
        dimming: {type: Number, min: 0, max: 100},    // 0-100
        timestamp: {
            type: Date,
            default: Date.now
        },
    })
};

module.exports = schemas;