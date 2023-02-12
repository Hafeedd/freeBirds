import SearchingChild from "../models/searchingChild.js";
import { createError } from "../utils/error.js";


export const createSC = async (req,res,next) =>{
    try{
        const searchingChild = new SearchingChild({
            ...req.body,
        })
        await searchingChild.save();
        res.status(200).json("Successfully started to search Child.")
    }catch(err){
        next(createError(400,"Something went wrong ,try again later."))
    }
}

export const getSC = async (req,res,next) =>{
    try{
        const searchChild = await SearchingChild.findById(req.params.id);
        res.status(200).json(searchChild);
    }catch(err){
        next(createError(400,"No child by this id"));
    }
}

export const getAllSC = async (req,res,next) =>{
    try{
        const searchChild = await SearchingChild.find();
        res.status(200).json(searchChild);
    }catch(err){
        next(createError(400,"No Children is found Or something went wrong."));
    }
}

export const deleteSC = async (req,res,next) =>{
    try{
        const searchChild = await SearchingChild.findByIdAndDelete(req,params.id)
        res.status(200).json(`${searchChild}\ndeleted successfully`);
    }catch(err){
        next(createError(400,"Failed to delete the child."));
    }
}