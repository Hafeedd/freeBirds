import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    password:{
        type: String,
        required: true,
    },
    type:{
        type:{isAdmin:{type:Boolean,default:false,},isOrg:{type:Boolean,default:false,},isUser:{type:Boolean,default:false,}},
    },
},{timestamps:true});

export default mongoose.model("Login",loginSchema)