import { verify } from "crypto";
// import { counter } from "../config/srchImgInterval.js";
import Login from "../models/login.js";
import SearchingChild from "../models/searchingChild.js";
import { indexFaces, search_face, deleteFace } from "../utils/searchChild.js";

//detect face
export const detectFace = async (req,res) =>{

    var face = await SearchingChild.findOne({photo:req.body.photo})
        const obj = {
            photo: req.body.photo
        }
        
        const name = await Login.findById(req.user.id)
            var searchingChild = new SearchingChild({
                email:name.email,
                name:name.username,
                ...req.body,
            })
            search_face(obj,async(data) => {
                if(data.found === false)
                {
                if(!face){
                    await searchingChild.save();  
                    console.log("image saved")
                }
            }
            else{
                await searchingChild.save();
                res.send(data.resultAWS.FaceId)    
            }
            
            
        });
}

//insert face to collection
export const insertFace = (req,callback)=>{
    const obj = {
        photo: req.body.photo,
        id_user:req.user.id
    }
     indexFaces(obj, (data) => {
        if(data.found){
            const imageId = data.resultAWS.FaceId
            callback(imageId); 
        }
        else return data;
    });
}

//delete face in collection
export const deleteface = (req,res) => {
    const obj = {
        face_id: req.body.face_id
    }
    
    deleteFace(obj, (data) => {
        res.send(data);
    });
}