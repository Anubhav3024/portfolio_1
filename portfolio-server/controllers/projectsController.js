const Project = require("../models/Project");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../middleware/upload");

// GET /api/projects
const getProjects = async (req, res) => {
  try {
    res.json(await Project.find().sort({ order: 1, createdAt: -1 }));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/projects (admin, with optional image)
const createProject = async (req, res) => {
  try {
    let thumbnailUrl = "";
    let thumbnailPublicId = "";
    if (req.file) {
      const result = await uploadToCloudinary(req.file.path);
      thumbnailUrl = result.url;
      thumbnailPublicId = result.publicId;
    }
    const techStack = req.body.techStack ? JSON.parse(req.body.techStack) : [];
    const project = await Project.create({
      ...req.body,
      techStack,
      thumbnailUrl,
      thumbnailPublicId,
    });
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/projects/:id (admin, with optional image)
const updateProject = async (req, res) => {
  try {
    const existing = await Project.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: "Not found" });

    let thumbnailUrl = existing.thumbnailUrl;
    let thumbnailPublicId = existing.thumbnailPublicId;

    if (req.file) {
      // Delete old image from cloudinary
      await deleteFromCloudinary(existing.thumbnailPublicId);
      const result = await uploadToCloudinary(req.file.path);
      thumbnailUrl = result.url;
      thumbnailPublicId = result.publicId;
    }

    const techStack = req.body.techStack
      ? JSON.parse(req.body.techStack)
      : existing.techStack;

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      { ...req.body, techStack, thumbnailUrl, thumbnailPublicId },
      { new: true },
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/projects/:id (admin)
const deleteProject = async (req, res) => {
  try {
    const existing = await Project.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: "Not found" });
    await deleteFromCloudinary(existing.thumbnailPublicId);
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// REORDER /api/projects/reorder (admin)
const reorderProjects = async (req, res) => {
  try {
    const { orders } = req.body; // [{ id, order }, ...]
    const promises = orders.map((item) =>
      Project.findByIdAndUpdate(item.id, { order: item.order }),
    );
    await Promise.all(promises);
    res.json({ message: "Order updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  reorderProjects,
};
