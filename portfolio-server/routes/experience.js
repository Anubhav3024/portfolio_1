const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceController");

router.get("/experience", getExperience);
router.post("/experience", protect, createExperience);
router.put("/experience/:id", protect, updateExperience);
router.delete("/experience/:id", protect, deleteExperience);

module.exports = router;
