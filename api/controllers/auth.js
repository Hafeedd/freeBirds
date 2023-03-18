import bcrypt from "bcrypt";
import Login from "../models/login.js";
import { createError } from "../utils/error.js";
import {encrypt} from "../utils/cryto.js"


// Login
export const login = async (req,res,next) =>{
    const name = req.body.username;
    try{
        console.log("authentication started")
        const user = await Login.findOne({username:name});
        if(!user) return next(createError(404,"User not found"));
        
        const ispasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!ispasswordCorrect) return next(createError(400,"Wrong password or username!"));

        
        // const token = jwt.sign({id:user._id,type:user.type},process.env.JWT) 
        const data = JSON.stringify({id:user._id,type:user.type})
        // console.log(data)
        const token = await encrypt(data)
        console.log("token"+token)

        const {password,type,...other} = user._doc;
        res.cookie("access_token",token,{
            httpOnly:true,
            sameSite: 'strict',
            path: '/',
            expires: new Date(new Date().getTime() + 30 * 60 * 60 * 1000 ),
        }).status(200).json({...other,token})

    }catch(err){
        next(err)
    }
};