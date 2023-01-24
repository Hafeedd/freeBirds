import express from "express"
import { detectFace } from "../controllers/searchChild.js";

const routers = express.Router();

routers.post("/",detectFace)

export default routers;