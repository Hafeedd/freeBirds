// import SearchingChild from "../models/searchingChild.js";
// import { search_face, deleteFace } from "../utils/searchChild.js";
// import { mail1 } from "../utils/email.js";
// import MissingChild from "../models/missing_child.js";

// // var i = 0
// export const searchCild = async () =>{
//     // counter()
//     for await (const doc of SearchingChild.find()) {
//         if(doc){
//             let obj = { photo : doc.photo}
//             search_face(obj,async(data) => {
//                 if(data.found === false)
//                 {
//                     console.log("photo not found")
//                     return false
//                 }
//                 else{
//                     let res = await MissingChild.findOne({aws_face_id:data.resultAWS.FaceId})
//                     if(res){
//                         // console.log(res)
//                      const mail = res.userEmail
//                      const cont = res.phoneno
//                     mail1(mail,cont)
//                     console.log(doc._id)
//                     // await SearchingChild.findByIdAndDelete(doc._id)
//                     // console.log("searchCild deleted")
//                 }
//                 // const obj = {face_id:data.resultAWS.FaceId}
//                 // deleteFace(obj,(res)=>{
//                 //     if(res){
//                 //     }
//                 // })

//             }
//         });
//         }

//     }
// }

// // export const intervalID = setInterval(async() => {
   
// //    searchCild()
// //     // let i = 0
// //     // i++
// //     // if(i=1){
// //     //     clearInterval(intervalID)
// //     // }

// // },300000 /* 300000 */);//milliseconds
