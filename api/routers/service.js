import express from "express"
import { createServices, updateServices, viewServce, viewServces } from "../controllers/service.js";
import { verifyOrg, verifyOrgWithId } from "../utils/verifyToken.js";

const route = express.Router();

//create service
route.post("/:id",verifyOrgWithId,createServices) //id of the organisation who create the services

//update service
route.put("/:id",verifyOrg,updateServices)

//view service
route.get("/:id",viewServce)

//view services
route.get("/",viewServces)

export default route;