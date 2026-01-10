import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { requireAuth } from "../middleware/auth.js";
import FRONTEND_URL from "../config/frontendUrl.js";

const router = express.Router();

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
      secure:true,
      sameSite: "lax"
    });

    res.redirect(`${FRONTEND_URL}/post-login`);
  }
);

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});
router.post("/complete-profile", requireAuth, async (req, res) => {
  const { name,phone, collegeId } = req.body;
  req.user.name=name;
  req.user.phone = phone;
  req.user.collegeId = collegeId;
  req.user.isProfileComplete = true;

  await req.user.save();
  res.json({ success: true });
});

router.get("/me", requireAuth, (req, res) => {
  res.json(req.user);
});
export default router;
