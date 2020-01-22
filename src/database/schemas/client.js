'use strict'

const mongoose = require('..');
Schema = mongoose.Schema;

const schemas = {
    clientSchema: new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: {type: String, unique: true},   // unico
        apps: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'App'
        }],
    })
};

module.exports = schemas;