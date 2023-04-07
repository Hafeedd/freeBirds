import mongoose from "mongoose";

const misschildSchema = new mongoose.Schema({
    u_id:{
        type: String,
        required: true
    },
    aws_face_id:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
        trim:true
    },
    phoneno:{
        type: Number,
        required: true,
        trim:true
    },
    userEmail:{
        type: String,
        required: true,
        trim:true
    },
    state:{
        type: String,
        required: true,
        trim:true
    },
    city:{
        type: String,
        required: true,
        trim:true
    },
    photo:{
        type: String,
        required: true,
    },
    appearance:{
        type: String,
    },
    gender:{
        type: String,
    },
    age:{
        type: Number,
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