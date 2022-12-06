import express from "express";
import { createMissingChild } from "../controllers/missingChild.js";

const route = express.Router();

//create missing child
route.post("/createMissing_child/:id",createMissingChild)

export default route;