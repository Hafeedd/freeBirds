import mongoose from "mongoose";

const awarnessSchema = new mongoose.Schema({
    o_id:{
        type: String,
        required: true,
    },
    orgName:{
        type: String,
        required: true,
    },
    orgState:{
        type: String,
        required: true,
    },
    orgCity:{
        type: String,
        required: true,
    },
    awareness:{
        type: String,
        required: true,
    },
    
},
{timestamps:true}
);
export default mongoose.model("Awarness",awarnessSchema);