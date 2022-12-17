import Public from "../models/public.js";
import bcrypt from "bcrypt";
import Login from "../models/login.js";
import { createError } from "../utils/error.js";

//register User
export const registerUser = async (req,res,next) =>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);
    try{
        const use = new Public({
            password:hash,
            ...req.body,
        })       
        await use.save()
        const {password,...others} = use._doc;
        res.status(200).json(others)
    try{
        const userLogin = new Login({
        _id:use._id,
        username:req.body.name,
        password:hash,
        type:{isUser:true}
        })
        await userLogin.save()
    }catch(err){
        next(createError(404,"failed to create User."))
    }   
    }catch(err){
        next(createError(404,"failed to create User."))
    }
};

//update Public
export const updateUser = async (req,res,next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);
    try{
        const UpdateUser = await Public.findByIdAndUpdate(req.params.id,
            {$set:{
                ...req.body,
                password:hash
            }},{new:true})
            const {password,...others} = UpdateUser._doc;
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

// delete Public
export const deleteUser = async (req,res,next) => {
    try{
        await Public.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted successfully.")
        try{
            await Login.findByIdAndDelete(req.params.id)
        }catch(err){
            next(err)
        }
    }catch(err){
        next(err)
    }
};

// get Public
export const getUser = async (req,res,next) => {
    try{
        const user = await Public.findById(req.params.id);
        const {password,_id,...others} = user._doc;
        res.status(200).json({...others});
    }catch(err){
        next(createError(400,"Publics not found."))
    }
};

// get Publics
export const getAllUsers = async (req,res,next) => {
    try{
        const users = await Public.find(); 
        res.status(200).json(users);
    }catch(err){
        next(createError(400,"Publics not found."))
    }
};