import mongoose from "mongoose";

const orgSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        select:false,
    },
    state:{
        type: String,
        required: true,
    },
    district:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneno:{
        type: Number,
        required: true,
        unique: true,
        min:10,
    },
},
{timestamps:true}
);
export default mongoose.model("Organisation",orgSchema);