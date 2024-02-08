import express from "express";
import { getAllData } from "./../controllers/getDataController.js";
const getDataRoutes = express.Router();
getDataRoutes.get("/", getAllData);

export { getDataRoutes };
