'use strict'

const mongoose = require('..');
Schema = mongoose.Schema;

const schemas = {
    alertSchema: new Schema({
        device: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Device'
        },
        type: String,
        timestamp: {
            type: Date,
            default: Date.now
        },
    })
};

module.exports = schemas;