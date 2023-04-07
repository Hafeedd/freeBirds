import mongoose from "mongoose";

const searchingChildSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        trim:true
    },
    photo:{
        type: String,
        required: true,
    }
},
{timestamps:true},
);

export default mongoose.model("SearchingChild",searchingChildSchema);