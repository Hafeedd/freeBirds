import loginInfo from "../models/loginInfo.js"


export const Logins =async () =>{
    var date = new Date()
    var mm = String(date.getMonth());
    var yy = date.getFullYear();
    
    const year = await loginInfo.findOne({year:yy});
    if(!year){
        var i = -1;
        while(i<=11){
            const obj = {
                year:yy,
                months:[0],
            }
            obj.months[i] = 0;
            i++
            if(mm == i){
                obj.months[i] = 1 ;
                const dates = new loginInfo(obj)
                await dates.save();
                break;
            }
        }
        
        
    }
    else if(year){
        for(let i = 0 ; i <= 12 ; i++){
            if(mm == i){
                const month = year.months
                const obj = {
                    months:month
                }
                const value = year.months[i]
                obj.months.splice(i,1,value+1)
                await loginInfo.findByIdAndUpdate(year.id,{$set:obj})
            }
        }
    }

}





// export const Logins =async () =>{
//     var date = new Date()
//     var mm = String(date.getMonth()+1);
//     var yy = date.getFullYear();

//     const year = await loginInfo.findOne({year:yy});
//     if(!year){
//         for(let i = 0 ; i <= 12 ; i++){
//             if(mm == i){
//                 const obj = {
//                     year:yy,
//                     months:0
//                 }
//                 const month = {}
//                 month[mm] = 1
//                 obj.months = month ;
//             const dates = new loginInfo(obj)
//             await dates.save();
//         }
//         }
        

//     }
//     else if(year){
//         for(let i = 0 ; i <= 12 ; i++){
//         if(mm == i){
//             const data = {
//                 months:0
//             }
//             const month = {}
//             data.months = month ;
//             const value = year.months[i]
//             month[mm] = value+1
//             await loginInfo.findByIdAndUpdate(year.id,{$set:data})
//             }
//         }
//         }
    
// }