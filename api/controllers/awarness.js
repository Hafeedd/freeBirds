import Awarness from "../models/awarness.js"
import Organisation from "../models/organisation.js";
import { createError } from "../utils/error.js"

//create awarness
export const createAwarness = async (req,res,next) =>{
    try{
        const data = await Organisation.findById(req.user.id)
        const awarness = new Awarness({
            orgState:data.state,
            orgCity:data.district,
            orgName:data.name,
            o_id:req.user.id,
            ...req.body,
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

//get all awarness
export const getAllAwarness = async (req,res,next) =>{
    try{
        const awarness = await Awarness.find()
        let a = []
        for(let i=0;i<awarness.length;i++){
        var {o_id,_id,...others} = awarness[i]._doc;
        a[i] = {...others}
        }
        res.status(200).json(a);
    }catch(err){ 
        next(createError(400,"Failed to get awarnessess."))
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