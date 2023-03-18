import mongoose from "mongoose";

const loginInfo = new mongoose.Schema({
    year:{
        type:Number
    },
    // months:{
    //         1:{type:Number , default:0,},
    //         2:{type:Number , default:0,},
    //         3:{type:Number , default:0,},
    //         4:{type:Number , default:0,},
    //         5:{type:Number , default:0,},
    //         6:{type:Number , default:0,},
    //         7:{type:Number , default:0,},
    //         8:{type:Number , default:0,},
    //         9:{type:Number , default:0,},
    //         10:{type:Number , default:0,},
    //         11:{type:Number , default:0,},
    //         12:{type:Number , default:0,},
    // }
    months:[0,0,0,0,0,0,0,0,0,0,0,0]
})

export default mongoose.model('LoginInfo',loginInfo)