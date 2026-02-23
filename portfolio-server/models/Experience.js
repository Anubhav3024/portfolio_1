const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String },
  startYear: { type: Number, required: true },
  endYear: { type: Number }, // null means "Present"
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Experience", ExperienceSchema);
