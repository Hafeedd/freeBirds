import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import orgRegR from "./routers/auth.js"
import awarnessR from "./routers/awarness.js"
import educationR from "./routers/education.js"
import missingChildR from "./routers/missingChild.js"


const app = express()
dotenv.config()

const connect = async ()=>{
    try{
        mongoose.connect(process.env.MONGO)
        console.log("connected to mongodb.")
    }catch(error){
        throw error;
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("Database disconnected");
})

//middleware

app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.use("/api/auth",orgRegR);
app.use("/api/awarness",awarnessR);
app.use("/api/education",educationR);
app.use("/api/missingChild",missingChildR);


app.use((err,req,res,next)=>{
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong."
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack,
    })
})

app.listen(8800,()=>{
    connect();
    console.log("connected to backend.")
})
