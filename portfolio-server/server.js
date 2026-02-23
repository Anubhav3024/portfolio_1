require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const journeyRoutes = require("./routes/journey");
const skillsRoutes = require("./routes/skills");
const projectsRoutes = require("./routes/projects");
const experienceRoutes = require("./routes/experience");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/login", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api", journeyRoutes); // /api/education, /api/certifications, /api/contributions
app.use("/api/skills", skillsRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/experience", experienceRoutes);

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) =>
  res.json({ status: "OK", message: "Portfolio API running." }),
);

// ─── 404 ──────────────────────────────────────────────────────────────────────
app.use((req, res) => res.status(404).json({ message: "Route not found." }));

// ─── Global Error Handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

// ─── DB + Start ───────────────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`),
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });
