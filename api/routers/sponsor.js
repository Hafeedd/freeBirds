import express from "express"
import { createSpnsr, deleteSpnsr, updateSpnsr, viewSpnsrs } from "../controllers/sponsor.js";
import { verifyOrgWithId } from "../utils/verifyToken.js";

const route = express.Router();

//create Sponsor
route.post("/:id",verifyOrgWithId,createSpnsr) //id of the organisation who create the services

//update Sponsor
route.put("/:id",verifyOrgWithId,updateSpnsr)

//view Sponsor
// route.get("/:id",viewService)

//view Sponsor
route.get("/:id",viewSpnsrs)

//delete Sponsor
route.delete("/:id",deleteSpnsr)

export default route;