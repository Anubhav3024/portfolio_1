const mongoose = require("mongoose");

const contributionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    organization: { type: String, required: true },
    description: { type: String, default: "" },
    year: { type: Number, required: true },
    instagramLink: { type: String },
    thumbnailUrl: { type: String },
    thumbnailPublicId: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Contribution", contributionSchema);
