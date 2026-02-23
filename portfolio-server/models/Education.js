const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    startYear: { type: String, required: true },
    endYear: { type: String }, // null means "Present"
    score: { type: String }, // Percentage or CGPA
    description: { type: String, default: "" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Education", educationSchema);
