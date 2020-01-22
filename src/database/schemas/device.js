'use strict'

const mongoose = require('..');
Schema = mongoose.Schema;

const schemas = {
    deviceSchema: new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        type: {type: String, uppercase: true, enum: ['LORA']},    // [LORA ZB WIFI]
        client_id: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Client'
        },
        app_id: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'App'
        },
        zone_id: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Zone'
        },
        location: {lat: Number, lon: Number},
        EUI: {type: String, maxlength: 64} // 64 bytes
    })
};

module.exports = schemas;