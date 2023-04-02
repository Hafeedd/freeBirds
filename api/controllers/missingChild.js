import missing_child from "../models/missing_child.js";
import { createError } from "../utils/error.js";
import { deleteFace } from "../utils/searchChild.js";
import Organisation from "../models/organisation.js";
import { /* deleteface, */ insertFace } from "./searchChild.js";
import Public from "../models/public.js";
// import { upload } from "../utils/uploader.js";

//create missing_child
// var data ;

const formatDate = () => {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 

export const createMissingChild = async (req,res,next) =>{
    var data = await Organisation.findById(req.user.id)
    if(!data){
        data = await Public.findById(req.user.id)
    }
    const date = formatDate()
    try{ 
        insertFace(req,async (imageId)=>{
            if(imageId) {
        try{const missingChild = new missing_child({
            // photo:req.file.filename,
            aws_face_id:imageId,
            phoneno:data.phone,
            userEmail:data.email,
            date:date,
            ...req.body,
            })
            await missingChild.save()
            res.status(200).json("Missing Child created successfully")
            console.log("missing child created")}
            catch(err){
                next(createError(400,"Failed to create missing child."))
            }
        }
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

export const  searchfac = async (req,res,next) =>{
    try{
        const searchfac = await missing_child.findOne({aws_face_id:req.params.id})
        res.status(200).json(searchfac);
    }catch(err){
        next(createError(400,"No missing child posted with this face id"))
    }
}

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

// //view missing children usinf aws-face-id
// export const searchMCByFaceId = async (req,res,next) =>{
//     const face_id = req.query.id;
//     try{
//         const foundChild = await missing_child.find({aws_face_id:face_id})
//         res.status(200).json(foundChild);
//     }catch(err){
//         next(createError(400,"Failed to get missing child."))
//     }
// };
