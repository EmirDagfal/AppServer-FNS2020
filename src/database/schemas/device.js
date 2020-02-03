'use strict'

const Schema = require('mongoose').Schema;

const schemas = {
    deviceSchema: new Schema({
        _id: Schema.Types.ObjectId,
        type: {
            type: String,
            uppercase: true,
            enum: ['LORA'],
            required: true,
        },    // TODO agregar otros tipos de apps [LORA ZB WIFI]
        client_id: { 
            type: Schema.Types.ObjectId, 
            ref: 'Client',
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
        created: {
            type: Date,
            default: Date.now(),
            required: true,
        },
        EUI: {
            type: String,
            maxlength: 64
        } // 64 bytes
    })
};

module.exports = schemas;