import mongoose from "mongoose";

const searchingChildSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
        required: true,
    }
},
{timestamps:true},
);

export default mongoose.model("SearchingChild",searchingChildSchema);