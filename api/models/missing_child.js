import mongoose from "mongoose";

const misschildSchema = new mongoose.Schema({
    o_id:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    phoneno:{
        type: Number,
        required: true,
    },
    image:{
        type: [String],
        required: true,
    },
    height:{
        type: Number,
    },
    age:{
        type: Number,
    },
    color:{
        type: String,
    },
    dress:{
        type: String,
    },
    date:{
        type: Date,
        required: true,
    },
    status:{
        type: Boolean,
        default:false,
    },
},
{timestamps:true}
);
export default mongoose.model("MissingChild",misschildSchema);