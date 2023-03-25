import missing_child from "../models/missing_child.js";

const count = async()=>{
    var length = 0;
    let query = await missing_child.find();
        if(query){
            query.count()
           length++
        }

}

// export const intervalID = setInterval(async() => {
//     var i = 0
//     i++
//     if(i=1){
//         clearInterval(intervalID)
//     }

// },1000 /* 300000 */);//milliseconds

// export default intervalID;
