import express from "express"
import { detectFace } from "../controllers/searchChild.js";
import { verifyAdmin/* , verifyUser  */} from "../utils/verifyToken.js";

const routers = express.Router();

routers.post("/",verifyAdmin,detectFace)

export default routers;