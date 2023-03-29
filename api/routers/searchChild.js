import express from "express"
import { detectFace } from "../controllers/searchChild.js";
import {/*  verifyAdmin, */ verifyOrg, verifyUser } from "../utils/verifyToken.js";

const routers = express.Router();

routers.post("/",verifyUser,verifyOrg,detectFace)


export default routers;