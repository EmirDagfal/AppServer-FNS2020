'use strict'

const Schema = require('mongoose').Schema;

const schemas = {
    deviceSchema: new Schema({
        _id: Schema.Types.ObjectId,
        type: {type: String, uppercase: true, enum: ['LORA']},    // [LORA ZB WIFI]
        client_id: { 
            type: Schema.Types.ObjectId, 
            ref: 'Client'
        },
        app_id: { 
            type: Schema.Types.ObjectId, 
            ref: 'App'
        },
        zone_id: { 
            type: Schema.Types.ObjectId, 
            ref: 'Zone'
        },
        location: {lat: Number, lon: Number},
        EUI: {type: String, maxlength: 64} // 64 bytes
    })
};

module.exports = schemas;