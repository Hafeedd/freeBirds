import Sponsor from "../models/sponsor.js";
import { createError } from "../utils/error.js"

//create service
export const createSpnsr = async (req,res,next) =>{
    try{
        console.log("creating sponsor")
        // const data = await organisation.findById(req.user.id)
        const spnsr = new Sponsor({
            o_id:req.user.id,
            ...req.body
        })
        await spnsr.save()
        res.status(200).json(spnsr)
    }catch(err){
    next(createError(400,"Failed to create sponsor."))
    }
};

//update services
export const updateSpnsr = async (req,res,next) =>{
    try{
        const spnsr = await Sponsor.findByIdAndUpdate(req.params.id)
       await service.save()
       res.status(200).json(spnsr) 
    }catch(err){
        next(createError(400,"Failed to update sponsor"))
    }
};

//get service
// export const viewService = async (req,res,next) =>{
//     try{
//         const service = await Service.findById(req.params.id)
//         res.status(200).json(service)
//     }catch(err){
//         next(createError(400,"Failed to view service."))
//     }
// };

//get services
export const viewSpnsrs = async (req,res,next) =>{
    try{
        const spnsr = await Sponsor.find({o_id:req.params.id})
        // let a = []
        // for(let i=0;i<spnsr.length;i++){
        // var {_id,o_id,...others} = spnsr[i]._doc;
        // a[i] = {...others}
        // }
        res.status(200).json(spnsr);
    }catch(err){
        next(createError(400,"Failed to view Sponsors."))
    }
};

//delete service
export const deleteSpnsr = async (req,res,next) =>{
    try{
        await Sponsor.findOneAndDelete({id:req.params.id})
        res.status(200).json("Sponsor deleted successfully")
    }catch(err){
        next(createError(400,"Failed to delete Sponsor."))
    }
}