import { useEffect,useState } from "react";
import { URL1,URL2 } from "./constants";
    const useRestaurantMenu=(resid)=>{

        const [resinfo,setresinfo]=useState(null);

        useEffect(()=>{
            fetchdata();
        },[]);

        const fetchdata=async ()=>{
            const data=await fetch(URL1+resid+URL2);

            const json=await data.json();
            setresinfo(json.data);
        }

        return resinfo;
    }

    export default useRestaurantMenu;