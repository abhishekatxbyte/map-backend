import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getDataRoutes } from "./routes/getDataRoutes.js";
import dotEnv from "dotenv";
dotEnv.config();
const app = express();
const port = process.env.PORT || 3005;

app.use(cors()); // Enable CORS for all origins

// Other middleware
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/getData", getDataRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
