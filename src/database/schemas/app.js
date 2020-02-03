'use strict'

const Schema = require('mongoose').Schema;

const schemas = {
    appSchema: new Schema({
        _id: Schema.Types.ObjectId,
        name: {
            type: String,
            unique: true,
            required: true,
        },
        version: {
            type: String,
            maxlength: 20,
        },
        description: {
            type: String,
            maxlength: 140
        } // maximo 140 caracteres
    })
};

module.exports = schemas;