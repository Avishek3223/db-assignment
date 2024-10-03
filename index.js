const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const userRoutes = require('./routes/userRoutes');
const addressRoutes = require('./routes/addressRoutes');

const app = express();
app.use(express.json());

// Use the routes
app.use('/api', userRoutes);
app.use('/api', addressRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
  });
