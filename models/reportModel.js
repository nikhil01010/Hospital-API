
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  status: { type: String, enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'], required: true },
  // Other report details
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);
