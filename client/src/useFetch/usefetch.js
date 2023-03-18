import axios from "axios";
import { useEffect,useState } from "react";

const useFetch = (url) =>{
    const [datas , setDatas] = useState([])
    const [error , setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const res = await axios.get(url)
                console.log(res)
                setDatas(res.data);
            }catch(err){
            setError(err);
            }
            setLoading(false);
        };
        fetchData();
    },[url]);

    return{datas,error,loading}
};

export default useFetch;