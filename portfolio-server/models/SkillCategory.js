const mongoose = require("mongoose");

const skillCategorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true }, // e.g. Frontend, Backend
    skills: [{ type: String }],
  },
  { timestamps: true },
);

module.exports = mongoose.model("SkillCategory", skillCategorySchema);
