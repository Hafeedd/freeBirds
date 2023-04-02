import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import orgRegR from "./routers/auth.js";
import awarnessR from "./routers/awarness.js";
import missingChildR from "./routers/missingChild.js";
import serviceR from "./routers/service.js";
import searchR from "./routers/searchChild.js"
import feedbackR from "./routers/feedbacks.js"
import sponsorR from "./routers/sponsor.js"
import bodyParser from "body-parser";

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
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json());


app.use("/api/auth",orgRegR);
app.use("/api/awarness",awarnessR);
app.use("/api/missingChild",missingChildR);
app.use("/api/service",serviceR)
app.use("/api/searchMC",searchR)
app.use("/api/feedback",feedbackR)
app.use("/api/sponsor",sponsorR)

app.use((err,req,res,next)=>{
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong."
    return res.status(errStatus).json({
        a:"error from index",
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