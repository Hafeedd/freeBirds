import express from "express";
import { login } from "../controllers/auth.js";
import { deleteOrg, getAllOrgs, getOrg, registerOrg, updateOrg } from "../controllers/organisation.js";
import { deleteUser, getAllUsers, getUser, registerUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyOrg, verifyUser } from "../utils/verifyToken.js";

const route = express.Router()

//login
route.post("/login",login);

//organisation
route.post("/registerOrg",verifyAdmin ,registerOrg);
route.put("/updateOrg/:id",verifyOrg ,updateOrg)
route.delete("/deleteOrg/:id",verifyOrg ,deleteOrg)
route.get("/getOrg/:id",getOrg)
route.get("/getOrg/",getAllOrgs)

//User
route.post("/registerUser", registerUser);
route.put("/updateUser/:id",verifyUser ,updateUser)
route.delete("/deleteUser/:id",verifyUser ,deleteUser)
route.get("/getUser/:id",getUser)
route.get("/getUser/",getAllUsers)

export default route;