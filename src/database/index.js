'use strict'

const db = require('.');
const alertSchema = require('./schemas/alert').alertSchema;
const appSchema = require('./schemas/app').appSchema;
const clientSchema = require('./schemas/client').clientSchema;
const dataSchema = require('./schemas/data').dataSchema;
const deviceSchema = require('./schemas/device').deviceSchema;
const zoneSchema = require('./schemas/zone').zoneSchema;

const models = {
    Alert: db.model('Alert', alertSchema),
    App: db.model('App', appSchema),
    Client: db.model('Client', clientSchema),
    Data: db.model('Data', dataSchema),
    Device: db.model('Device', deviceSchema),
    Zone: db.model('Zone', zoneSchema),
};

module.exports = models;