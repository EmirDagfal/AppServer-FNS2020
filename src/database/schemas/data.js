'use strict'

const mongoose = require('..');
Schema = mongoose.Schema;

const schemas = {
    dataSchema: new Schema({
        device: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Device'
        },
        power: Number,
        energy: Number,
        dimming: Number,
        timestamp: {
            type: Date,
            default: Date.now
        },
    })
};

module.exports = schemas;