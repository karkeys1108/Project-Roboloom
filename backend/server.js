// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend-backend communication
app.use(bodyParser.json()); // Parse JSON request bodies

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/roboloom';
mongoose.connect(mongoURI, {
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define MongoDB Schema
const registrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  area: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postCode: { type: String, required: true },
  school: { type: String },
  grade: { type: String, required: true },
  experience: { type: String, required: true },
  learningMode: { type: String, required: true },
});

const Registration = mongoose.model('Registration', registrationSchema);


app.post('/submit', async (req, res) => {
  try {
    const {
      fullName,
      dob,
      gender,
      email,
      phone,
      area,
      city,
      state,
      postCode,
      school,
      grade,
      experience,
      learningMode,
    } = req.body;

    if (
      !fullName ||
      !dob ||
      !gender ||
      !email ||
      !phone ||
      !area ||
      !city ||
      !state ||
      !postCode ||
      !grade ||
      !experience ||
      !learningMode
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const registration = new Registration({
      fullName,
      dob: new Date(dob),
      gender,
      email,
      phone,
      area,
      city,
      state,
      postCode,
      school,
      grade,
      experience,
      learningMode,
    });

    // Save to MongoDB
    await registration.save();

    // Send success response
    res.status(201).json({ message: 'Registration successful', data: registration });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});