import express from "express";
import { createSC, deleteSC, getAllSC, getSC } from "../controllers/searchingChild.js";

const router = express.Router();

//create searching child 
router.post("/",createSC);

//view a searching child
router.get("/:id",getSC);

//view all searchingChild
router.get("/",getAllSC);

//view a searching child
router.delete("/:id",deleteSC);

export default router