import Education from "../models/education.js";
import { createError } from "../utils/error.js";

//create education
export const createEdu = async (req,res,next) => {
    try{
        verifyToken(async(req,res)=>{
        const edu = new Education({
            o_id:req.user.id,
            ...req.body,
        })
        await edu.save();
        res.status(200).json(edu);
    })
    }catch(err){
    next(createError(404,"Falied to create education."))
    }
};

//update education
export const updateEdu = async (req,res,next) => {
    try{
        const edu = await Education.findByIdAndUpdate(req.params.id)
        res.status(200).json(edu);
    }catch(err){
    next(createError(404,"Falied to update education."))
    }
};

//find education
export const getEdu = async (req,res,next) => {
    try{
        const edu = await Education.findById(req.params.id)
        res.status(200).json(edu);
    }catch(err){
    next(createError(404,"Falied to find education."))
    }
};


//find all education
export const getAllEdu = async (req,res,next) => {
    try{
        const edu = await Education.find()
        res.status(200).json(edu);
    }catch(err){
    next(createError(404,"Falied to find educations."))
    }
};

//delete education
export const deleteEdu = async (req,res,next) => {
    try{
        const edu = await Education.findByIdAndDelete(req.params.id)
        res.status(200).json(edu);
    }catch(err){
    next(createError(404,"Falied to find educations."))
    }
};