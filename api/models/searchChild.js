import mongoose from "mongoose";

const searchChildSchema = new mongoose.Schema({
    name:{
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

export default mongoose.model("SearchChild",searchChildSchema);