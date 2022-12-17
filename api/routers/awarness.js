import express from "express"
import {
     createAwarness, deletAwarness, getAllAwarness, getAwarness, upddateAwarness
     } from "../controllers/awarness.js";
import { verifyOrg, verifyOrgWithId} from "../utils/verifyToken.js";

const routers = express.Router();


//create awarness
routers.post("/:id",verifyOrgWithId,createAwarness) //id of the org ,creating the awareness

//update awareness
routers.put("/:id",upddateAwarness)

//get awarness
routers.get("/:id",getAwarness)

//get Allawarness
routers.get("/",getAllAwarness)

//delete awareness
routers.delete("/:id",verifyOrgWithId,deletAwarness)


export default routers;