const Patient = require('../models/patientModel');
const Report = require('../models/reportModel');

exports.registerPatient = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const patient = await Patient.findOne({ phoneNumber });
    if (patient) return res.json({ message: 'Patient already exists', patient });
    const newPatient = await Patient.create({ phoneNumber });
    res.json({ message: 'Patient registered successfully!', newPatient });
  } catch (err) {
    res.status(500).json({ error: 'Error registering patient' });
  }
};

exports.createReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { created_by, status } = req.body;
    const patient = await Patient.findById(id);
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    const report = await Report.create({ patient, created_by, status });
    res.json({ message: 'Report created successfully!', report });
  } catch (err) {
    res.status(500).json({ error: 'Error creating report' });
  }
};




exports.getAllReports = async (req, res) => {
  try {
    const { id } = req.params; // Extract patient ID from URL parameter

    const patient = await Patient.findById(id).populate('reports', '-__v').select('-__v');
    if (!patient) return res.status(404).json({ error: 'Patient not found' });

    res.json({ reports: patient.reports });
  } catch (err) {
    console.error('Error fetching patient reports:', err.message);
    res.status(500).json({ error: 'Error fetching patient reports' });
  }
};