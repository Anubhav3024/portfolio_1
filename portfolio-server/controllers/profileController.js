const Profile = require("../models/Profile");

// GET /api/profile
const getProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) profile = await Profile.create({});
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
};

// PUT /api/profile (admin)
const updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) profile = new Profile();
    Object.assign(profile, req.body);
    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
};

module.exports = { getProfile, updateProfile };
