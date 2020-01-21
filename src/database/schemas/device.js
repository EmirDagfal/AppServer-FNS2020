'use strict'

const mongoose = require('..');
Schema = mongoose.Schema;

const schemas = {
    deviceSchema: new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        type: String,
        client: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Client'
        },
        app: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'App'
        },
        zone: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Zone'
        },
        location: {lat: Number, lon: Number},
        EUI: {type: String}
    })
};

module.exports = schemas;