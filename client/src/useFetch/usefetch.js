import axios from "axios";
import { useEffect,useState } from "react";

const useFetch = (url) =>{
    const [datas , setDatas] = useState([])
    const [error , setError] = useState({
        status:false,
        message:''
    })
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const res = await axios.get(url,{withCredentials: true})
                setDatas(res.data);
            }catch(err){
                setError({status:true,message:err.response.data.message});
            }
            setLoading(false);
        };
        fetchData();
    },[url]);

    return{datas,error,loading}
};

export default useFetch;