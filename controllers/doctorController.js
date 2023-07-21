const Doctor = require('../models/doctorModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



exports.registerDoctor = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Please provide both username and password' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = await Doctor.create({ username, password: hashedPassword });

    res.json({ message: 'Doctor registered successfully!', doctor });
  } catch (err) {
    console.error('Error registering doctor:', err.message);
    res.status(500).json({ error: 'Error registering doctor' });
  }
};


exports.loginDoctor = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = await Doctor.findOne({ username });
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

    const isPasswordValid = await bcrypt.compare(password, doctor.password);
    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: doctor._id }, 'your-secret-key');
    res.json({ message: 'Login successful!', token });
  } catch (err) {
    res.status(500).json({ error: 'Error logging in' });
  }
};
