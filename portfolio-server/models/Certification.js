const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    year: { type: Number, required: true },
    link: { type: String },
    thumbnailUrl: { type: String },
    thumbnailPublicId: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Certification", certificationSchema);
