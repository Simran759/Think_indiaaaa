import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    console.log("🔄 Connecting to MongoDB...");
    console.log("MongoDB URI:", process.env.MONGO_URI?.substring(0, 50) + "...");

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 2,
      retryWrites: true,
      w: "majority"
    });

    console.log("✅ MongoDB connected successfully");
    return true;
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    throw err;
  }
};

