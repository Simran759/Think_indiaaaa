import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  eventId: { type: String },
  eventName: { type: String },
  teamCode: { type: String, default: null }
});

registrationSchema.index(
  { userId: 1, eventId: 1 },
  { unique: true }
);

export default mongoose.model("Registration", registrationSchema);
