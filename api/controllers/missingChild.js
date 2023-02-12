import missing_child from "../models/missing_child.js";
import { createError } from "../utils/error.js";
import { deleteface, insertFace } from "./searchChild.js";
// import { upload } from "../utils/uploader.js";

//create missing_child
var data ;
export const createMissingChild = async (req,res,next) =>{
    try{ 
        insertFace(req,async (imageId)=>{
        if(imageId) {
        const missingChild = new missing_child({
            // photo:req.file.filename,
            aws_face_id:imageId,
            o_id:req.params.id,
            ...req.body,
        })
        await missingChild.save()
        res.status(200).json("Missing Child created successfully")
        console.log("missing child created")
    }else return err;
    })
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
        deleteFace(async(req,res)=>{
        if(res.data.err){
            res.status(400).json("Something went wrong.")
        }
        else{
            await missing_child.findByIdAndDelete(req.params.id)
            res.status(200).json("Deleted the missing chiled.");
        }
    })    
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

//view missing children usinf aws-face-id
export const searchMCByFaceId = async (req,res,next) =>{
    const face_id = req.query.id;
    try{
        const foundChild = await missing_child.find({aws_face_id:face_id})
        res.status(200).json(foundChild);
    }catch(err){
        next(createError(400,"Failed to get missing child."))
    }
};
