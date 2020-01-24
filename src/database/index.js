'use strict'

const mongoose = require('mongoose');
const alertSchema = require('./schemas/alert').alertSchema;
const appSchema = require('./schemas/app').appSchema;
const clientSchema = require('./schemas/client').clientSchema;
const dataSchema = require('./schemas/data').dataSchema;
const deviceSchema = require('./schemas/device').deviceSchema;
const zoneSchema = require('./schemas/zone').zoneSchema;

const models = {
    Alert: mongoose.model('Alert', alertSchema),
    App: mongoose.model('App', appSchema),
    Client: mongoose.model('Client', clientSchema),
    Data: mongoose.model('Data', dataSchema),
    Device: mongoose.model('Device', deviceSchema),
    Zone: mongoose.model('Zone', zoneSchema),
};

module.exports = models;