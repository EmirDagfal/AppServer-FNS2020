const mongoose = require('..'),
Schema = mongoose.Schema;

const schemas = {
    zoneSchema: new Schema({
        name: String,
        _id: mongoose.Schema.Types.ObjectId,
        geofence: [{ 
            lat: Number,
            lon: Number
        }],
    })
};

module.exports = schemas;