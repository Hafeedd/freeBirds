import { createError } from "../utils/error.js";
import { decrypt } from "./cryto.js";



// verify token
export const verifyToken = (req,next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(404,"You are not autherized!"))
    }
    try{
        // console.log("verifying token")
        const user = decrypt(token)
        // console.log("token verified")
        
        data = JSON.parse(user)
        console.log("data"+data)
        console.log("user"+user)
        req.user = user;
        next()
    }catch(err){
        return next(createError(403,"Token not valid!"))
    }
    
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
