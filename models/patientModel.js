

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  phoneNumber: { type: String, unique: true, required: true },
  // Other patient details
});

patientSchema.virtual('reports', {
  ref: 'Report',
  localField: '_id',
  foreignField: 'patient',
});

module.exports = mongoose.model('Patient', patientSchema);
