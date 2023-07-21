const Report = require('../models/reportModel');

exports.createReport = async (req, res) => {
  try {
    const { created_by, status } = req.body;
    const report = await Report.create({ created_by, status });
    res.json({ message: 'Report created successfully!', report });
  } catch (err) {
    res.status(500).json({ error: 'Error creating report' });
  }
};

exports.getAllReports = async (req, res) => {
  try {
    const { status } = req.params;
    const reports = await Report.find({ status }).populate('patient', 'phoneNumber').select('-__v');
    res.json({ reports });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching reports' });
  }
};
