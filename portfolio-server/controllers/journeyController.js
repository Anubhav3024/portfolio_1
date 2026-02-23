const Education = require("../models/Education");
const Certification = require("../models/Certification");
const Contribution = require("../models/Contribution");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../middleware/upload");

// --- EDUCATION ---
const getEducation = async (req, res) => {
  try {
    res.json(await Education.find().sort({ startYear: -1 }));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const createEducation = async (req, res) => {
  try {
    res.status(201).json(await Education.create(req.body));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const updateEducation = async (req, res) => {
  try {
    const doc = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteEducation = async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// --- CERTIFICATIONS ---
const getCertifications = async (req, res) => {
  try {
    res.json(await Certification.find().sort({ year: -1 }));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const createCertification = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      const { url, publicId } = await uploadToCloudinary(
        req.file.path,
        "certifications",
      );
      data.thumbnailUrl = url;
      data.thumbnailPublicId = publicId;
    }
    const cert = await Certification.create(data);
    res.status(201).json(cert);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const updateCertification = async (req, res) => {
  try {
    const cert = await Certification.findById(req.params.id);
    if (!cert) return res.status(404).json({ message: "Not found" });

    const data = { ...req.body };
    if (req.file) {
      if (cert.thumbnailPublicId)
        await deleteFromCloudinary(cert.thumbnailPublicId);
      const { url, publicId } = await uploadToCloudinary(
        req.file.path,
        "certifications",
      );
      data.thumbnailUrl = url;
      data.thumbnailPublicId = publicId;
    }

    const updated = await Certification.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteCertification = async (req, res) => {
  try {
    const cert = await Certification.findById(req.params.id);
    if (cert && cert.thumbnailPublicId) {
      await deleteFromCloudinary(cert.thumbnailPublicId);
    }
    await Certification.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// --- CONTRIBUTIONS ---
const getContributions = async (req, res) => {
  try {
    res.json(await Contribution.find().sort({ year: -1 }));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const createContribution = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      const { url, publicId } = await uploadToCloudinary(
        req.file.path,
        "contributions",
      );
      data.thumbnailUrl = url;
      data.thumbnailPublicId = publicId;
    }
    const contrib = await Contribution.create(data);
    res.status(201).json(contrib);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const updateContribution = async (req, res) => {
  try {
    const contrib = await Contribution.findById(req.params.id);
    if (!contrib) return res.status(404).json({ message: "Not found" });

    const data = { ...req.body };
    if (req.file) {
      if (contrib.thumbnailPublicId)
        await deleteFromCloudinary(contrib.thumbnailPublicId);
      const { url, publicId } = await uploadToCloudinary(
        req.file.path,
        "contributions",
      );
      data.thumbnailUrl = url;
      data.thumbnailPublicId = publicId;
    }

    const updated = await Contribution.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteContribution = async (req, res) => {
  try {
    const contrib = await Contribution.findById(req.params.id);
    if (contrib && contrib.thumbnailPublicId) {
      await deleteFromCloudinary(contrib.thumbnailPublicId);
    }
    await Contribution.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
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
};
