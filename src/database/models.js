const mongoose = require('./'),
const alertSchema = require('./schemas/device').alertSchema;
const appSchema = require('./schemas/device').appSchema;
const clientSchema = require('./schemas/device').clientSchema;
const dataSchema = require('./schemas/device').dataSchema;
const deviceSchema = require('./schemas/device').deviceSchema;
const zoneSchema = require('./schemas/device').zoneSchema;

const models = {
    Alert: mongoose.model('Device', alertSchema),
    App: mongoose.model('Device', appSchema),
    Client: mongoose.model('Device', clientSchema),
    Data: mongoose.model('Device', dataSchema),
    Device: mongoose.model('Device', deviceSchema),
    Zone: mongoose.model('Device', zoneSchema),
};

module.exports = models;