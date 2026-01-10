import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";

import "./config/passport.js";
import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/user.js";
import eventRoutes from "./routes/Registration.js";
// import walletRoutes from "./routes/wallet.js";

const app = express();

// 🔥 CORS CONFIG (THIS IS THE IMPORTANT PART)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// routes
app.use("/auth", authRoutes);
// app.use("/user", userRoutes);
app.use("/events", eventRoutes);
// app.use("/wallet", walletRoutes);

export default app;
