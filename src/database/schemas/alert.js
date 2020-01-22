'use strict'

const mongoose = require('..');
Schema = mongoose.Schema;

const schemas = {
    alertSchema: new Schema({
        dev_id: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Device'
        },
        type: {type: String, uppercase: true, enum: ['POWER', 'COMMUNICATION']}, // [POWER COMMUNICATION]
        viewed: {type: Boolean, default: false},
        timestamp: {
            type: Date,
            default: Date.now
        },
    })
};

module.exports = schemas;