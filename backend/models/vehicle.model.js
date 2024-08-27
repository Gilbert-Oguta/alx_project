const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
  {
    username: { type: String, required: true },
    service: { type: String, required: true },
    vehicleType: { type: String, required: true },
    contact: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Vehicledata = mongoose.model('Vehicledata', vehicleSchema);

module.exports = Vehicledata;
