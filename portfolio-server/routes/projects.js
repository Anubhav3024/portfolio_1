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

router.get("/projects", getProjects);
router.post("/projects", protect, upload.single("thumbnail"), createProject);
router.put("/projects/:id", protect, upload.single("thumbnail"), updateProject);
router.delete("/projects/:id", protect, deleteProject);
router.post("/projects/reorder", protect, reorderProjects);

module.exports = router;
