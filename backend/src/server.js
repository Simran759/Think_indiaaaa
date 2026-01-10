import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";
connectDB().then(() => {
  app.listen(5000, () => console.log("Server running"));
});

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
