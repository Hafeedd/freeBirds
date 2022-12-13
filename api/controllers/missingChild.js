import missing_child from "../models/missing_child.js"
import { createError } from "../utils/error.js"

//create missing_child
export const createMissingChild = async (req,res,next) =>{
    try{
        const missingChild = new missing_child({
            // o_id:req.params.id,
            // name:req.body.name,
            // state:req.body.state,
            // city:req.body.city,
            // image:req.body.image,
            // gender:req.body.gender,
            // height:req.body.height,
            // age:req.body.age,
            // color:req.body.color,
            // dress:req.body.dress,
            o_id:req.params.id,
            ...req.body,
        })
        await missingChild.save()
        res.status(200).json(missingChild);
    }catch(err){
        next(createError(400,"Failed to create missing child."))
    }
};

//update missing child
export const updateMissingChild = async (req,res,next) =>{
    try{
        const missingChild = await missing_child.findByIdAndUpdate(req.params.id)
        res.status(200).json(missingChild);
    }catch(err){
        next(createError(400,"Failed to update missing child."))
    }
};

//delete missing child
export const deleteMissingChild = async (req,res,next) =>{
    try{
        const missingChild = await missing_child.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted");
    }catch(err){
        next(createError(400,"Failed to delete missing child."))
    }
};

//view missing child
export const MissingChild = async (req,res,next) =>{
    try{
        const missingChild = await missing_child.findById(req.params.id)
        res.status(200).json(missingChild);
    }catch(err){
        next(createError(400,"Failed to get missing child."))
    }
};

//view missing children
export const MissingChilds = async (req,res,next) =>{
    try{
        const missingChild = await missing_child.find()
        res.status(200).json(missingChild);
    }catch(err){
        next(createError(400,"Failed to get missing child."))
    }
};
