import mongoose from "mongoose";

const orgSchema = new mongoose.Schema({
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
    state:{
        type: String,
        required: true,
        trim:true
    },
    district:{
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
    phone:{
        type: Number,
        required: true,
        unique: true,
        min:7,
        // max:10,
    },
},
{timestamps:true}
);
export default mongoose.model("Organisation",orgSchema);