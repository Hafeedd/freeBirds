import bcrypt from "bcrypt";
import Login from "../models/login.js";
import { createError } from "../utils/error.js";
import {encrypt} from "../utils/cryto.js"
import loginInfo from "../models/loginInfo.js"
import { Logins } from "../config/loginInfos.js";
// import { searchCild } from "../config/srchImgInterval.js"; 
// import {intervalID} from "../config/srchImgInterval.js";

// intervalID()
// searchCild()

//login info function
export const loginfo = async (req,res,next) =>{
    var date = new Date()
    var yy = date.getFullYear();
    try{
        const info = await loginInfo.findOne({year:yy});
        const {_id,...others} = info._doc;
        res.status(200).json({...others});
    }catch(err){
        next(createError(303,"Something went wrong!"))
    }
}


//logout function
export const logout = async (req,res,next) =>{
    try{
        if(req.cookies.access_token){
            res.clearCookie('access_token').status(200).json("Logout successfull.")
        }else{
            res.status(300).json("You are not loged in.")
        }
    }catch(err){
        next(err)
    }
}

// Login function
export const login = async (req,res,next) =>{
    const name = req.body.username;
    try{
        const user = await Login.findOne({username:name});
        if(!user) return next(createError(404,"User not found"));
        
        const ispasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!ispasswordCorrect) return next(createError(400,"Wrong password or username!"));

        
        // const token = jwt.sign({id:user._id,type:user.type},process.env.JWT) 
        const data = JSON.stringify({id:user._id,type:user.type})
        const token = await encrypt(data)

        const {password,type,...other} = user._doc;
        res.cookie("access_token",token,{
            httpOnly:true,
            sameSite: 'strict',
            path: '/',
        }).status(200).json({...other,token})
        // Logins()

    }catch(err){
        next(err)
    }
};