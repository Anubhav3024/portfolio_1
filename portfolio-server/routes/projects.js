const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { upload } = require("../middleware/upload");
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  reorderProjects,
} = require("../controllers/projectsController");

router.get("/", getProjects);
router.post("/", protect, upload.single("thumbnail"), createProject);
router.put("/:id", protect, upload.single("thumbnail"), updateProject);
router.delete("/:id", protect, deleteProject);
router.post("/reorder", protect, reorderProjects);

module.exports = router;
