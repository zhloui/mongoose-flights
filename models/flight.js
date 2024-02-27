const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: { type: String, enum: ['American', 'Southwest', 'United'] },
  airport: { type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] },
  flightNo: { type: Number, required: true, min: 10, max: 9999 },
  departs: { type: Date, default: () => new Date(new Date().setFullYear(new Date().getFullYear() + 1)) },
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
