import mongoose from "mongoose";

const publicSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        trim:true

    },
    password:{
        type: String,
        required: true,
    },
    district:{
        type: String,
        required: true,
        trim:true
    },   
    state:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    gender:{
        type: String,
        // required: true,
    },
    phone:{
        type: Number,
        required: true,
        unique: true,
        trim:true
    },
},
{timestamps:true}
);
export default mongoose.model("Public",publicSchema);