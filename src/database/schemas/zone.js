'use strict'

const Schema = require('mongoose').Schema;

const schemas = {
    zoneSchema: new Schema({
        _id: Schema.Types.ObjectId,
        name: {type: String, unique: true},   // unico
        geofence: [{ 
            lat: Number,
            lon: Number
        }],
    })
};

module.exports = schemas;