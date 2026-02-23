const Experience = require("../models/Experience");

// GET /api/experience
const getExperience = async (req, res) => {
  try {
    const experience = await Experience.find().sort({
      startYear: -1,
      createdAt: -1,
    });
    res.json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/experience (protected)
const createExperience = async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json(experience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/experience/:id (protected)
const updateExperience = async (req, res) => {
  try {
    const updated = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updated)
      return res.status(404).json({ message: "Experience not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/experience/:id (protected)
const deleteExperience = async (req, res) => {
  try {
    const deleted = await Experience.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Experience not found" });
    res.json({ message: "Experience deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
};
