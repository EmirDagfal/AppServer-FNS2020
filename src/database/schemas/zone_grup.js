'use strict'

const Schema = require('mongoose').Schema;

const schemas = {
    zoneSchema: new Schema({
        _id: Schema.Types.ObjectId,
        name: {
            type: String,
            unique: true,
            required: true,
        },   // unico
        zones: [{
            type: Schema.Types.ObjectId, 
            ref: 'Zone',
            required: true,
        }],
    })
};

module.exports = schemas;