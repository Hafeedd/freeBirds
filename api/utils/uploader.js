import multer from "multer";
import { extname } from "path";

const storageEngine = multer.diskStorage({
    destination:"./images",
    filename: (req,file,cb) =>{
        cb(null, `${Date.now()}--${file.originalname}`);
    },
});


//image filtering
const path = require("path");
const checkFileType = (file,cb) =>{
    
    //Allowed file extensions
    const fileTypes = /jpeg|jpg|png|gif|svg/;

    //check extension names
    const mimeType = fileTypes.test(path.extname(file.originalname).toLocaleLowerCase());

    if (mimeType && extname){
        return cb(null, true);
    }
    else{
        cb("Error: you can Only Upload Images!!");
    }
};


export const upload = multer({
    storage: storageEngine,
    limits:{fileSize: 2000000 },
    fileFilter: (req,file,cb) =>{
        checkFileType(file, cb);
    },
});