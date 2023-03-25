import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    feedback:{
        type:String,
        required:true,
    }
})

export default mongoose.model("Feedack",feedbackSchema)