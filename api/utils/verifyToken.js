import { createError } from "../utils/error.js";
import { decrypts } from "./cryto.js";



// verify token
export const verifyToken = async (req,res,next) => {
    const token = req.cookies.access_token;
    // console.log(token)
    if(!token){
        return next(createError(404,"You are not autherized!"));
    }
        const user = await decrypts(token)
            if(!user) return next(createError(403, "Token is not valid!"));
            req.user = user;
            next();
}

// verify Admin
export const verifyAdmin = async (req,res,next) =>{
    await verifyToken(req,res,next,()=>{
        if(req.user.type.isAdmin){
            next()
        }else {
        return next(createError(403,"You are not autherized!"))
        }
    })
}

// verify Organisation for updation
export const verifyOrgWithId = (req,res,next) =>{
    verifyToken(req,res,next,()=>{
        console.log("verifying")
        if(req.user.type.isOrg && req.user.id === req.params.id || req.user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}
// verify Organisation
export const verifyOrg = (req,res,next) =>{
    verifyToken(req,res,next,()=>{
        if(user.type.isOrg || user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}

// verify User with id
export const verifyUserWithId = (req,res,next) =>{
    verifyToken(req,res,next,()=>{
        if(user.type.isUser && user.id === req.params.id || user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}
// verify User
export const verifyUser = async (req,res,next) =>{
    const user = await verifyToken(req,res,next,()=>{
        if(user.type.isUser || user.type.isAdmin){
            next()
        }else return next(createError(403,"You are not autherized!"))
    })
}

// verify user and org with id
export const verifyUserOrgWithId = (req,res,next) =>{
    verifyToken(req,res,next,()=>{
        // console.log("verifying token")   
        if(user.type.isUser && user.id === req.params.id || req.user.type.isOrg && req.user.id === req.params.id || user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}