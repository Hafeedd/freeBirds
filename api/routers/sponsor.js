import express from "express"
import { createSpnsr, updateSpnsr, viewSpnsrs } from "../controllers/sponsor.js";
import { verifyOrgWithId } from "../utils/verifyToken.js";

const route = express.Router();

//create service
route.post("/:id",verifyOrgWithId,createSpnsr) //id of the organisation who create the services

//update service
route.put("/:id",verifyOrgWithId,updateSpnsr)

//view service
// route.get("/:id",viewService)

//view services
route.get("/",viewSpnsrs)

export default route;