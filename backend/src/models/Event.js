import mongoose from "mongoose";

export default mongoose.model("Event", new mongoose.Schema({
  title: String,
  // coinCost: Number,
  // maxSeats: Number,
  registeredCount: { type: Number, default: 0 }
}));
