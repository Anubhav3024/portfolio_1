const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [{ type: String }],
    liveLink: { type: String, default: "" },
    githubLink: { type: String, default: "" },
    thumbnailUrl: { type: String, default: "" },
    thumbnailPublicId: { type: String, default: "" }, // For Cloudinary deletion
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Project", projectSchema);
