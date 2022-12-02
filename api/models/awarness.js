import mongoose from "mongoose";

const awarnessSchema = new mongoose.Schema({
    o_id:{
        type: String,
        required: true,
    },
    awarness:{
        type: String,
        required: true,
    },
    details:{
        type: String,
        required: true,
    },
    
},
{timestamps:true}
);
export default mongoose.model("Awarness",awarnessSchema);