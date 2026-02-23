const SkillCategory = require("../models/SkillCategory");

// GET /api/skills
const getSkills = async (req, res) => {
  try {
    res.json(await SkillCategory.find());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// POST /api/skills
const createSkill = async (req, res) => {
  try {
    res.status(201).json(await SkillCategory.create(req.body));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// PUT /api/skills/:id
const updateSkill = async (req, res) => {
  try {
    const doc = await SkillCategory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// DELETE /api/skills/:id
const deleteSkill = async (req, res) => {
  try {
    await SkillCategory.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getSkills, createSkill, updateSkill, deleteSkill };
