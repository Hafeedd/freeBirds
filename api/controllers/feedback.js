import Feedback from "../models/feedback.js";
import { createError } from "../utils/error.js";


//creating feedback
export const createFeedback = async (req,res,next) =>{
    try{
        const feedback = new Feedback({
            ...req.body,
        })
        await feedback.save();
        res.status(200).json("Feedback successfully created");
    }catch(err){
        next(createError(400,"Failed to create feedback."))
    }
}

//delete feedback
export const deleteFeedback = async (req,res,next) =>{
    try{
        console.log("deleting feedback")
        await Feedback.findByIdAndDelete(req.params.id)
        res.status(200).json("Feedback deleted successfully");
    }catch(err){
        next(createError(400,"Failed to delete feedback."))
    }
}

//get all feedbacks
export const getFeedbacks = async (req,res,next) =>{
    try{
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    }catch(err){
        next(createError(400,"Failed to fetch feedbacks."))
    }
}
