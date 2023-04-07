import Organisation from "../models/organisation.js";
import bcrypt from "bcrypt";
import Login from "../models/login.js";
import { createError } from "../utils/error.js";

// register Organisation
export const registerOrg = async (req,res,next) =>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);
    try{
        const org = new Organisation({
            ...req.body,
            password:hash,
        })
        console.log(org)
        console.log("saving org")
        await org.save()
        console.log("org saved")
        const {password,...others} = org._doc;
        res.status(200).json(others)
        try{
            const orgLogin = new Login({
            _id:org._id,
            email:req.body.email,
            username:req.body.name,
            password:hash,
            type:{isOrg:true}
            })    
            await orgLogin.save() 
            console.log("organisation registered")
        }catch(err){
            next(createError(404,"failed to create Organisation."))
        }
    }catch(err){
        next(createError(404,"failed to create Organisation."))
    }
};

//update organisation
export const updateOrg = async (req,res,next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);
    try{
        const UpdateOrg = await Organisation.findByIdAndUpdate(req.params.id,
            {$set:{
                ...req.body,
                password:hash
            }},{new:true})
            const {password,...others} = UpdateOrg._doc;
            res.status(200).json({...others})
        try{
            await Login.findByIdAndUpdate(req.params.id,
                {$set:{
                    username:req.body.name,
                    password:hash
                }},{new:true})
        }catch(err){
            next(err)
        }
    }catch(err){
    next(err)
    }
};

// delete Organisation
export const deleteOrg = async (req,res,next) => {
    try{
        await Organisation.findByIdAndDelete(req.params.id)
        res.status(200).json("Organisation deleted successfully.")
        try{
            await Login.findByIdAndDelete(req.params.id)
        }catch(err){
            next(err)
        }
    }catch(err){
        next(err)
    }
};

// get Organisation
export const getOrg = async (req,res,next) => {
    try{
        const org = await Organisation.findById(req.params.id);
        const {password,_id,...others} = org._doc;
        res.status(200).json({...others});
    }catch(err){
        next(createError(400,"Organisations not found."))
    }
};

// get Organisations
export const getAllOrgs = async (req,res,next) => {
    try{
        const orgs = await Organisation.find()
        // orgs.forEach(()=>{
        //     const {password,id,...other} = orgs._doc;
        // })
        res.status(200).json(orgs)
    }catch(err){
        next(createError(400,"Something went wrong while fetching Organisations"))
    }
};