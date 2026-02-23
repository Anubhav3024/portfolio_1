const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// POST /api/login
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    let admin = await Admin.findOne({ username });
    console.log(`Login attempt for user: ${username}`);

    // Auto-create admin from env on first run if not in DB
    if (!admin) {
      console.log(
        `User ${username} not found in DB. Checking env credentials...`,
      );
      if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
      ) {
        console.log(`Env credentials match! Creating admin user...`);
        const hash = await bcrypt.hash(password, 10);
        admin = await Admin.create({ username, passwordHash: hash });
      } else {
        console.log(`Env credentials do not match or user doesn't exist.`);
        return res.status(401).json({ message: "Invalid credentials." });
      }
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!isMatch) {
      console.log(`Password mismatch for user: ${username}`);
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.json({ token, username: admin.username });
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
};

module.exports = { login };
