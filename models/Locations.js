const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var LocationsSchema = new Schema({
    lng: String,
    lat: String,
    w3w: String,
    name: String,
    notes: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Locations = mongoose.model('Locations', LocationsSchema);