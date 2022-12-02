import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    o_id:{
        type: String,
        required: true,
    },
    education:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    info:{
        type: String,
    },
},
{timestamps:true}
);
export default mongoose.model("education",educationSchema);