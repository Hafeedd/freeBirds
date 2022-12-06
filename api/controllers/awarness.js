import Awarness from "../models/awarness.js"
import { createError } from "../utils/error.js"

//create awarness
export const createAwarness = async (req,res,next) =>{
    try{
        const awarness = new Awarness({
            o_id:req.params.id,
            awarness:req.body.awarness,
            details:req.body.details,
        })
        await awarness.save();
        res.status(200).json(awarness);
    }catch(err){
    next(createError(400,"Failed to create awarness."))
} 
};

//update Awarness
export const upddateAwarness = async (req,res,next) =>{
    try{
        const awarness = await Awarness.findByIdAndUpdate(req.params.id)
        await awarness.save();
        res.status(200).json(awarness);
    }catch(err){
    next(createError(400,"Failed to update awarness."))
} 
};

//get awarness
export const getAwarness = async (req,res,next) =>{
    try{
        const awarness = await Awarness.findById(req.params.id)
        res.status(200).json(awarness);
    }catch(err){
    next(createError(400,"Failed to get awarness."))
} 
};

//get allawarness
export const getAllAwarness = async (req,res,next) =>{
    try{
        const awarness = await Awarness.find()
        res.status(200).json(awarness);
    }catch(err){
    next(createError(400,"Failed to get awarness."))
} 
};

//get deletAwarness
export const deletAwarness = async (req,res,next) =>{
    try{
        const awarness = await Awarness.findByIdAndDelete(req.params.id)
        res.status(200).json("awarness deleted successfully");
    }catch(err){
    next(createError(400,"Failed to get awarness."))
} 
};