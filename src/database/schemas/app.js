'use strict'

const mongoose = require('..');
Schema = mongoose.Schema;

const schemas = {
    appSchema: new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: {type: String, unique: true},   // unico
        version: String,    // ejemplo: '1.0.1'
        description: {type: String, maxlength: 140} // maximo 140 caracteres
    })
};

module.exports = schemas;