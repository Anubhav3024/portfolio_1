const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { upload } = require("../middleware/upload");
const {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
  getCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
  getContributions,
  createContribution,
  updateContribution,
  deleteContribution,
} = require("../controllers/journeyController");

// Education
router.get("/education", getEducation);
router.post("/education", protect, createEducation);
router.put("/education/:id", protect, updateEducation);
router.delete("/education/:id", protect, deleteEducation);

// Certifications
router.get("/certifications", getCertifications);
router.post(
  "/certifications",
  protect,
  upload.single("thumbnail"),
  createCertification,
);
router.put(
  "/certifications/:id",
  protect,
  upload.single("thumbnail"),
  updateCertification,
);
router.delete("/certifications/:id", protect, deleteCertification);

// Contributions
router.get("/contributions", getContributions);
router.post(
  "/contributions",
  protect,
  upload.single("thumbnail"),
  createContribution,
);
router.put(
  "/contributions/:id",
  protect,
  upload.single("thumbnail"),
  updateContribution,
);
router.delete("/contributions/:id", protect, deleteContribution);

module.exports = router;
