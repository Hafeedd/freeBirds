import express from "express";
import { createMissingChild, MissingChild, MissingChilds, updateMissingChild } from "../controllers/missingChild.js";
import { verifyOrg } from "../utils/verifyToken.js";

const route = express.Router();

//create missing child
route.post("/:id",createMissingChild)

//update missing child
route.put("/:id",verifyOrg,updateMissingChild)

//view missing child
route.get("/:id",MissingChild)

//view missing children
route.get("/",MissingChilds)

export default route;