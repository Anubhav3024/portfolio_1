const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  title: { type: String, default: "" },
  about: { type: String, default: "" },
  resumeUrl: { type: String, default: "" },
  email: { type: String, default: "" },
  socialLinks: {
    github: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    leetcode: { type: String, default: "" },
    twitter: { type: String, default: "" },
  },
});

module.exports = mongoose.model("Profile", profileSchema);
