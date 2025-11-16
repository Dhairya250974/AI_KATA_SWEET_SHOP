require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const sweetRoutes = require("./routes/sweets");

// Validate required environment variables
const requiredEnvVars = ["MONGO_URI", "JWT_SECRET"];
const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);

if (missingVars.length > 0 && process.env.NODE_ENV !== "test") {
  console.error("❌ Missing required environment variables:", missingVars.join(", "));
  console.error("Please check your .env file. See ENV_SETUP.md for details.");
  process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

// Only start server & connect DB if not testing
if (process.env.NODE_ENV !== "test") {
  connectDB(process.env.MONGO_URI).then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`✅ Server started on port ${PORT}`);
      console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
    });
  });
}

module.exports = app;