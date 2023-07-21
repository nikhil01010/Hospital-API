const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user2:2345@cluster0.r9pzcfi.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err.message));
