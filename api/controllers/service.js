import organisation from "../models/organisation.js";
import Service from "../models/services.js"
import { createError } from "../utils/error.js"

//create service
export const createServices = async (req,res,next) =>{
    try{
        const data = await organisation.findById(req.user.id)
        const service = new Service({
            orgState:data.state,
            orgCity:data.district,
            orgName:data.name,
            o_id:req.user.id,
            ...req.body
        })
        console.log(service)
        await service.save()
        res.status(200).json(service)
    }catch(err){
    next(createError(400,"Failed to create services."))
    }
};

//update services
export const updateServices = async (req,res,next) =>{
    try{
        const service = await Service.findByIdAndUpdate(req.params.id)
       await service.save()
       res.status(200).json(service) 
    }catch(err){
        next(createError(400,"Failed to update service"))
    }
};

//get service
export const viewService = async (req,res,next) =>{
    try{
        const service = await Service.findById(req.params.id)
        res.status(200).json(service)
    }catch(err){
        next(createError(400,"Failed to view service."))
    }
};

//get services
export const viewServices = async (req,res,next) =>{
    try{
        const services = await Service.find()
        let a = []
        for(let i=0;i<services.length;i++){
        var {_id,o_id,...others} = services[i]._doc;
        a[i] = {...others}
        }
        res.status(200).json(a);
    }catch(err){
        next(createError(400,"Failed to view services."))
    }
};

//delete service
export const deleteService = async (req,res,next) =>{
    try{
        await Service.findByIdAndDelete(req.params.id)
        res.status(200).json("Service deleted successfully")
    }catch(err){
        next(createError(400,"Failed to delete service."))
    }
}