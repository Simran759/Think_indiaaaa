import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { requireAuth } from "../middleware/auth.js";
import FRONTEND_URL from "../config/frontendUrl.js";

const router = express.Router();

// 📝 REGISTER
router.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    console.log("📝 Register request received:", { email, name });

    if (!email || !password || !name) {
      return res.status(400).json({ error: "All fields required" });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    user = new User({
      email,
      password,
      name,
      isProfileComplete: false
    });

    await user.save();
    console.log("✅ User created:", user._id);

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({ success: true, message: "Registered successfully" });
  } catch (err) {
    console.error("❌ Register error:", err.message, err.stack);
    res.status(500).json({ error: err.message || "Registration failed" });
  }
});

// 🔐 LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("🔐 Login request received:", { email });

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    console.log("✅ Login successful:", user._id);

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({ success: true, message: "Logged in successfully" });
  } catch (err) {
    console.error("❌ Login error:", err.message, err.stack);
    res.status(500).json({ error: err.message || "Login failed" });
  }
});

// 🚪 GOOGLE LOGIN (Optional - kept for backward compatibility)
router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${FRONTEND_URL}/login-failed`
  }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.redirect(`${FRONTEND_URL}/post-login`);
  }
);

// 🚪 LOGOUT
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});

// ✏️ COMPLETE PROFILE
router.post("/complete-profile", requireAuth, async (req, res) => {
  try {
    const { name, phone, collegeId } = req.body;
    req.user.name = name;
    req.user.phone = phone;
    req.user.collegeId = collegeId;
    req.user.isProfileComplete = true;

    await req.user.save();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to complete profile" });
  }
});

// 👤 GET USER
router.get("/me", requireAuth, (req, res) => {
  res.json(req.user);
});

export default router;
