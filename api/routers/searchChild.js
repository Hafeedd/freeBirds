import express from "express"
import { detectFace } from "../controllers/searchChild.js";
// import { decrypt } from "../utils/cryto.js";
import {/*  verifyAdmin, */ verifyUser } from "../utils/verifyToken.js";

const routers = express.Router();

routers.post("/",/* verifyUser, */detectFace)


// routers.get("/crypto",/* verifyUser, */decrypt)


export default routers;