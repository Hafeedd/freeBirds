import mongoose from "mongoose";

const publicSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        Select:false,
    },
    district:{
        type: String,
        required: true,
    },   
    state:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type: String,
        required: true,
    },
    phoneno:{
        type: Number,
        required: true,
        unique: true
    },
},
{timestamps:true}
);
export default mongoose.model("Public",publicSchema);