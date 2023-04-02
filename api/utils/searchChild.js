import config from "../config/aws-config.js";
import AWS from "aws-sdk";
// import fs from "fs"


AWS.config.region = config.region;

var rekognition = new AWS.Rekognition({region: config.region});

//set defaut obj to return results data
var objReturn = {
	found: false,
	resultAWS:undefined
}

export const search_face =async (obj, callback) => {
	
	console.log("Finding face ...")
	const image = obj.photo.split(",");
	const buffer = new Buffer.from(image[1], 'base64')
	
	rekognition.searchFacesByImage({
	 	"CollectionId": config.collectionName,
	 	"FaceMatchThreshold": 70, //set minumum match in image send
	 	"Image": {
			'Bytes': buffer  //'Bytes': new Buffer(obj.photo, 'base64')
	 	},
	 	"MaxFaces": 1 // set the number face detect in image send
	}, (err, data) => {
	 	if (err) {
			callback(err);
	 	} else { 
			try{
			if(data.FaceMatches && data.FaceMatches.length > 0 && data.FaceMatches[0].Face)
			{
				objReturn.found = true
				objReturn.resultAWS = data.FaceMatches[0].Face
				callback(objReturn);

			}else
			{
				objReturn.resultAWS = "Matching face not found"
				callback(objReturn)
			}
		}catch(err){
			console.log("err")
			callback(err)
			}
		}
	});
}

export const indexFaces = async (obj,callback) => {
	
	console.log("Index new image face ...")
	const image = obj.photo.split(",");
	const buffer = new Buffer.from(image[1], 'base64')

	 rekognition.indexFaces({
		"CollectionId": config.collectionName,
		"DetectionAttributes": [ "ALL" ], // set detect all atributes on image send.
		"ImageId": obj._id,
		"Image": { 
			'Bytes': buffer
		}
	}, (err, data) => {
		if (err) {
			console.log(err, err.stack); // an error occurred
			
			objReturn.found = false
			objReturn.resultAWS = err, err.stack
			callback(objReturn)
		} else {
			//  console.log(data.FaceRecords[0].Face); // successful response

			objReturn.found = true
			objReturn.resultAWS = data.FaceRecords[0].Face
			callback(objReturn)
		}
	});

}

export const deleteFace = (obj,callback) => {

	console.log("Delete image face ...")
	// console.log(obj.face_id)
	
	//prepare params to delete face index.
	var params_deletion = {CollectionId: config.collectionName, FaceIds: [obj.face_id]};

	rekognition.deleteFaces(params_deletion, function(err, data) {
		if (err) callback(err, err.stack);  // an error occurred
		else     callback(true,data);      // successful response
	});
}