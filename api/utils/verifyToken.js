import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

// verify token
export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(404,"You are not autherized!"))
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(createError(403,"Token not valid!"))
        req.user = user;
        next()
    })
}

// verify Admin
export const verifyAdmin = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if(req.user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}

// verify Organisation for updation
export const verifyOrgWithId = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if(req.user.type.isOrg && req.user.id === req.params.id || req.user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}
// verify Organisation
export const verifyOrg = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if(req.user.type.isOrg || req.user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}

// verify User with id
export const verifyUserWithId = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if(req.user.type.isUser && req.user.id === req.params.id || req.user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}
// verify User
export const verifyUser = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if(req.user.type.isUser && req.user.id === req.params.id || req.user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}
