import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema({
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
    service:{
        type: String,
        required: true,
    },
    details:{
        type: String,
    },
},
{timestamps:true}
);
export default mongoose.model("Service",serviceSchema);