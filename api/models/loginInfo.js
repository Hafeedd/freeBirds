import mongoose from "mongoose";

const loginInfo = new mongoose.Schema({
    year:{
        type:Number
    },
    months:[0,0,0,0,0,0,0,0,0,0,0,0]
})

export default mongoose.model('LoginInfo',loginInfo)