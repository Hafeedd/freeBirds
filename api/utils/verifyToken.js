import { createError } from "../utils/error.js";
import { decrypts } from "./cryto.js";



// verify token
export const verifyToken = async (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(404,"You are not autherized!"))
    }
        const user = await decrypts(token)
        console.log(user)
        // req.user = user;
        return user
    
}

// verify Admin
export const verifyAdmin = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if(user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}

// verify Organisation for updation
export const verifyOrgWithId = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if(user.type.isOrg && user.id === req.params.id || user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}
// verify Organisation
export const verifyOrg = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if(user.type.isOrg || user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}

// verify User with id
export const verifyUserWithId = async (req,res,next) =>{
    const user = await verifyToken(req,res,()=>{
        if(user.type.isUser && user.id === req.params.id || user.type.isAdmin){
            next()
        }else
        return next(createError(403,"You are not autherized!"))
    })
}
// verify User
export const verifyUser = async (req,res,next) =>{
    const user = await verifyToken(req,res)
        if(user.type.isUser || user.type.isAdmin){
            next()
        }else return next(createError(403,"You are not autherized!"))
}
