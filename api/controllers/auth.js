import bcrypt from "bcrypt";
import Login from "../models/login.js";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

// Login
export const login = async (req,res,next) =>{
    const name = req.body.username;
    try{
        const user = await Login.findOne({username:name});
        if(!user) return next(createError(404,"User not found"));
        
        const ispasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!ispasswordCorrect) return next(createError(400,"Wrong password or username!"));

        const token = jwt.sign({id:user._id,type:user.type},process.env.JWT)

        const {password,type,...other} = user._doc;
        res.cookie("access_token",token,{httpOnly:true,}).status(200).json({...other})
    }catch(err){
        next(err)
    }
};


