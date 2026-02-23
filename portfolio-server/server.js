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

// ─── Environment Validation ──────────────────────────────────────────────────
const requiredEnv = [
  "MONGO_URI",
  "JWT_SECRET",
  "ADMIN_USERNAME",
  "ADMIN_PASSWORD",
];
const missingEnv = requiredEnv.filter((env) => !process.env[env]);
if (missingEnv.length > 0) {
  console.log("=================================================");
  console.log("❌ CRITICAL ERROR: Missing Environment Variables");
  console.log("The following required keys are NOT set:");
  missingEnv.forEach((env) => console.log(`   - ${env}`));
  console.log(
    "Please add these in your Render Environment Variables dashboard.",
  );
  console.log("=================================================");

  // Wait 1s for logs to flush before exiting
  setTimeout(() => {
    process.exit(1);
  }, 1000);
  return; // Stop execution
}

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: true, // Reflects the request origin, allows any origin but more robustly
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Request Logger (Debug) ──────────────────────────────────────────────────
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api", authRoutes);
app.use("/api", profileRoutes);
app.use("/api", journeyRoutes);
app.use("/api", skillsRoutes);
app.use("/api", projectsRoutes);
app.use("/api", experienceRoutes);

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
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000, // Fail faster (10s) to show logs sooner
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log("=================================================");
    console.log("❌ CRITICAL ERROR: MongoDB Connection Failed");
    console.log(`Error Message: ${err.message}`);
    console.log("\nPossible Causes:");
    console.log("1. Invalid MONGO_URI in your Render Environment Variables.");
    console.log("2. IP Address NOT whitelisted in MongoDB Atlas.");
    console.log("   👉 Go to MongoDB Atlas -> Network Access");
    console.log(
      "   👉 Click 'Add IP Address' -> 'Allow Access From Anywhere' (0.0.0.0/0)",
    );
    console.log("3. Your MongoDB Cluster is currently paused or unreachable.");
    console.log("=================================================");

    // Wait 1s for logs to flush before exiting
    setTimeout(() => {
      process.exit(1);
    }, 1000);
  });
