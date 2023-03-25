import express from "express";
import { createFeedback, deleteFeedback, getFeedbacks } from "../controllers/feedback.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const route = express.Router();

//create feedback 
route.post("/",createFeedback)

//delete feedback
route.delete("/:id",verifyAdmin,deleteFeedback)

//get feedbacks 
route.get("/",verifyAdmin,getFeedbacks)


export default route;