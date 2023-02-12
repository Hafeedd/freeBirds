import { indexFaces, search_face, deleteFace } from "../utils/searchChild.js";

//detect face
export const detectFace = (req,res) =>{
    console.log("searching face ...")
    const obj = {
        photo: req.body.photo
    }

    search_face(obj, (data) => {
        if(data.FaceMatches)
        {
            console.log("err")
            res.send(data)
        }
        else{
            res.send(data);
            console.log("found matching face")}
    });
}

//insert face to collection
export const insertFace = (req,callback)=>{
    const obj = {
        photo: req.body.photo,
        id_user:req.body._id
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