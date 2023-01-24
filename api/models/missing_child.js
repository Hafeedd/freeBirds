import mongoose from "mongoose";

const misschildSchema = new mongoose.Schema({
    o_id:{
        type: String,
        required: true,
    },
    aws_face_id:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
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
        // required: true,
    },
    status:{
        type: Boolean,
        default:false,
    },
},
{timestamps:true},
);
export default mongoose.model("MissingChild",misschildSchema);