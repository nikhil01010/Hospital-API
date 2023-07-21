const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
app.use(bodyParser.json());

app.use(express.json());


// Routes
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const reportRoutes = require('./routes/reportRoutes');

app.use('/doctors', doctorRoutes);
app.use('/patients', patientRoutes);
app.use('/reports', reportRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
