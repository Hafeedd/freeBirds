import express from "express";
import { createEdu, deleteEdu, updateEdu } from "../controllers/education";
import { verifyOrg, verifyOrgWithId, verifyUser } from "../utils/verifyToken";

const route = express.Router();

//create education
route.post("/createEdu/:id",verifyOrg,createEdu)

//delete education
route.post("/deleteEdu/:id",verifyOrgWithId,deleteEdu)

//create education
route.post("/updateEdu/:id",verifyOrgWithId,updateEdu)

//create education
route.post("/createEdu/:id",verifyUser,createEdu)

//create education
route.post("/createEdu/:id",verifyUser,createEdu)