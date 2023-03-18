import express from "express"
import { detectFace } from "../controllers/searchChild.js";
import {/*  verifyAdmin, */ verifyUser } from "../utils/verifyToken.js";

const routers = express.Router();

routers.post("/",verifyUser,detectFace)

export default routers;