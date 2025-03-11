const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();


const app = express();

// Middleware
app.use(bodyParser.json()); 

app.use(
  cors({
    origin: "http://localhost:5173", // Change this to your deployed frontend URL
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  })
);

app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.sendStatus(200);
});

// ✅ MongoDB Connection
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/roboloom";
mongoose
  .connect(mongoURI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const db = mongoose.connection;

// ✅ Define MongoDB Schema
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

const Registration = mongoose.model("Registration", registrationSchema);

// ✅ POST Route: Handle Form Submission
app.post("/submit", async (req, res) => {
  try {
    // ✅ Set CORS Headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

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

    // ✅ Check for missing fields
    if (!fullName || !dob || !gender || !email || !phone || !area || !city || !state || !postCode || !grade || !experience || !learningMode) {
      return res.status(400).json({ message: "❌ All fields are required" });
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

    // ✅ Save to MongoDB
    await registration.save();

    // ✅ Send success response
    res.status(201).json({ message: "✅ Registration successful", data: registration });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "❌ An error occurred. Please try again." });
  }
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
