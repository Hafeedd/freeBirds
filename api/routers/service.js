import express from "express"
import { createServices, updateServices, viewService, viewServices } from "../controllers/service.js";
import { verifyOrgWithId } from "../utils/verifyToken.js";

const route = express.Router();

//create service
route.post("/:id",verifyOrgWithId,createServices) //id of the organisation who create the services

//update service
route.put("/:id",verifyOrgWithId,updateServices)

//view service
route.get("/:id",viewService)

//view services
route.get("/",viewServices)

export default route;