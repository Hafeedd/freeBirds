import express from "express";
import { createMissingChild, MissingChild, MissingChilds, updateMissingChild } from "../controllers/missingChild.js";
import { insertFace } from "../controllers/searchChild.js";
// import upload from "../utils/uploader.js";
// import { verifyOrg } from "../utils/verifyToken.js";

// upload.single('photo')

const route = express.Router();

//create missing child
route.post("/:id",createMissingChild);

//update missing child
route.put("/:id",updateMissingChild);

//view missing child
route.get("/:id",MissingChild);

//view missing children
route.get("/",MissingChilds);


export default route;