import missing_child from "../models/missing_child.js"
import { createError } from "../utils/error.js"

//create missing_child
export const createMissingChild = async (req,res,next) =>{
    try{
        const missingChild = new missing_child({
            o_id:req.params.id,
            name:req.body.name,
            email:req.body.email,
            location:req.body.location,
            image:req.body.image,
            gender:req.body.gender,
            age:req.body.age,
            height:req.body.height,
            dress:req.body.dress,
            color:req.body.color,
            date:req.body.date,
        })
    }catch(err){
        next(createError(400,"Failed to create missing child."))
    }
};