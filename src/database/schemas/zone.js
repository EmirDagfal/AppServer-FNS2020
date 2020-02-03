'use strict'

const Schema = require('mongoose').Schema;

const schemas = {
    zoneSchema: new Schema({
        _id: Schema.Types.ObjectId,
        name: {
            type: String,
            unique: true,
            required: true,
        },
        devices: [{
            type: Schema.Types.ObjectId,
            ref: 'Device'
        }],
        geofence: [{ 
            lat: Number,
            lon: Number
        }],
    })
};

module.exports = schemas;