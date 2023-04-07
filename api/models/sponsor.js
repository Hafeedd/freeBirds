import mongoose from "mongoose";

const SpnsrSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    o_id:{
        type: String,
        required: true,
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
    phone:{
        type: Number,
        required: true,
        // unique: true,
        // min:10,
        // max:10,
    },
},
{timestamps:true}
);
export default mongoose.model("Sponsor",SpnsrSchema);