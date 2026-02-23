const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillsController");

router.get("/skills", getSkills);
router.post("/skills", protect, createSkill);
router.put("/skills/:id", protect, updateSkill);
router.delete("/skills/:id", protect, deleteSkill);

module.exports = router;
