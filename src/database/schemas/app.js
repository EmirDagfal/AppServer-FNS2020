'use strict'

const Schema = require('mongoose').Schema;

const schemas = {
    appSchema: new Schema({
        _id: Schema.Types.ObjectId,
        name: {type: String, unique: true},   // unico
        version: String,    // ejemplo: '1.0.1'
        description: {type: String, maxlength: 140} // maximo 140 caracteres
    })
};

module.exports = schemas;