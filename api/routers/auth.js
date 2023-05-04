import express from "express";
import { login, loginfo, logout } from "../controllers/auth.js";
import { deleteOrg, getAllOrgs, getOrg, registerOrg, updateOrg } from "../controllers/organisation.js";
import { deleteUser, getAllUsers, getUser, registerUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyOrg, verifyOrgWithId, verifyUser, verifyUserWithId } from "../utils/verifyToken.js";

const route = express.Router()

//login
route.post("/login",login);
route.get("/logout",verifyOrg,verifyUser,logout);
route.get("/loginInfo",loginfo)

//organisation
route.post("/registerOrg",verifyAdmin ,registerOrg);
route.put("/updateOrg/:id",verifyOrgWithId ,updateOrg)
route.delete("/deleteOrg/:id",verifyOrgWithId ,deleteOrg)
route.get("/getOrg/:id",getOrg)
route.get("/getOrg/",getAllOrgs)

//User
route.post("/registerUser", registerUser);
route.put("/updateUser/:id",verifyUserWithId ,updateUser)
route.delete("/deleteUser/:id",verifyUserWithId ,deleteUser)
route.get("/getUser/:id",getUser)
route.get("/getUser/",getAllUsers)

export default route;