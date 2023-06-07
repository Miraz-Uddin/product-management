import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import mongoose from "mongoose";
import xss from "xss-clean";
import limiter from "./src/config/limiter.js";
import router from "./src/routes/api.js";

// making .env available to Use
dotenv.config({
  path: "./.env",
});

// Express Initialize
const app = new express();
app.use(express.json());

// Security Middleware
app.use(cors());
app.use(helmet());
app.use(rateLimit(limiter));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// MongoDB Database Connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database Connected"))
  .catch((e) => {
    console.log("Error While Connecting Database !!!");
    console.log(e);
  });

// Routing
app.use("/api/v1", router);
app.use("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    data: "No Data Found",
  });
});

export default app;
