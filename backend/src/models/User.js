import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: String,
  email: { type: String, unique: true },
  name: String,
  avatar: String,
  phone: String,
  collegeId: String,
  isProfileComplete: { type: Boolean, default: false },
  // coins: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
