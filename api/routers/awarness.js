import express from "express"
import {
     createAwarness, deletAwarness, getAllAwarness, getAwarness, upddateAwarness
     } from "../controllers/awarness.js";
import { verifyOrg} from "../utils/verifyToken.js";

const routers = express.Router();


//create awarness
routers.post("/createAwarness/:id",verifyOrg,createAwarness) //id of the org ,creating the awareness

//delete awareness
routers.delete("/deleteAwarness/:id",verifyOrg,deletAwarness)

//get awarness
routers.get("/getAwarness/:id",getAwarness)

//get Allawarness
routers.get("/getAwarness",getAllAwarness)

//update awareness
routers.put("/updateAwarness/:id",upddateAwarness)


export default routers;