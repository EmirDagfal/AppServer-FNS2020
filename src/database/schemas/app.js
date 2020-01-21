'use strict'

const mongoose = require('..');
Schema = mongoose.Schema;

const schemas = {
    appSchema: new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        version: String,
    })
};

module.exports = schemas;