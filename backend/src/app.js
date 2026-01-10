import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";
import FRONTEND_URL from "./config/frontendUrl.js";

import "./config/passport.js";
import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/user.js";
import eventRoutes from "./routes/Registration.js";
// import walletRoutes from "./routes/wallet.js";

const app = express();

// Log CORS configuration for debugging
console.log("🔐 CORS Configuration:");
console.log("   FRONTEND_URL:", FRONTEND_URL);

// 🔥 CORS CONFIG (THIS IS THE IMPORTANT PART)
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || origin === FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error("CORS policy: Origin not allowed"), false);
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.set("trust proxy", 1);
// routes
app.use("/auth", authRoutes);
// app.use("/user", userRoutes);
app.use("/events", eventRoutes);
// app.use("/wallet", walletRoutes);


export default app;
