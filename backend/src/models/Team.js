import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true
  },

  teamCode: {
    type: String,
    unique: true
  },

  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],

  maxSize: Number
}, { timestamps: true });

export default mongoose.model("Team", teamSchema);
