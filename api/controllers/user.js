import Public from "../models/public.js";
import bcrypt from "bcrypt";
import Login from "../models/login.js";
import { createError } from "../utils/error.js";

//register User
export const registerUser = async (req,res,next) =>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt); 
    try{
        let users = await Public.findOne({name:req.body.name}) || false 
        const email = await Public.findOne({email:req.body.email}) || false
        if(users){
            next(createError(404,"User name already exists."))
        }
        else if(email){
            next(createError(404,"email already exists."))
        }
        else{    
        const user = new Public({
            ...req.body,
            password:hash,
        })   
        // console.log(user)
        await user.save()
        const {password,...others} = user._doc;
        res.status(200).json({...others})

        const userLogin = new Login({
        _id:user._id,
        email:req.body.email,
        username:req.body.name,
        password:hash,
        type:{isUser:true},
        }) 
        await userLogin.save()
    }}catch(err){
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
            await Login.findByIdAndUpdate(req.params.id,
                {$set:{
                    username:req.body.name,
                    password:hash
                }},{new:true})
            const {password,...others} = UpdateUser._doc;
            res.status(200).json({...others})
    }catch(err){
    next(err)
    }
};

// delete Public
export const deleteUser = async (req,res,next) => {
    try{
        await Public.findByIdAndDelete(req.params.id)
        await Login.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted successfully.")
    }catch(err){
        next(err)
    }
};

// get Public
export const getUser = async (req,res,next) => {
    try{
        const user = await Public.findById(req.params.id);
        console.log(user)
        const {password,_id,...others} = user._doc;
        res.status(200).json({...others});
    }catch(err){
        next(createError(400,"Something went wrong while fetching the User"))
    }
};

// get Publics
export const getAllUsers = async (req,res,next) => {
    try{
        const users = await Public.find();
        let a = []
        for(let i=0;i<user.length;i++){
        var {password,...others} = users[i]._doc;
        a[i] = {...others}
        }
        res.status(200).json(a);
    }catch(err){
        next(createError(400,"Something went wrong while fetching the data of Public"))
    }
};