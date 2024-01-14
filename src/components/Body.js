import RestaurantCard , {withpromotedLabel}from "./RestaurantCard";
import resList from "../utils/mockData"; 
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "../utils/Usercontext";
const Body=()=>{
    const [listofrestaurant,setlistofrestaurant]=useState([]);
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchtext,setsearchtext]=useState("");
    const [darkMode, setDarkMode] = useState(false);

    const RestaurantCardPromoted=withpromotedLabel(RestaurantCard);// RestaurantCardPromoted is a component


    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata=async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json=await data.json();
        //console.log(json);
       setlistofrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const {loggedInUser,setuserinfo}=useContext(Usercontext);

    //conditional rendering

    const onlineStatus=useOnlineStatus();

    if(onlineStatus===false) return <h1>Please Check Your Internet Connection</h1>

    if(listofrestaurant.length===0) return <Shimmer/>


    console.log(listofrestaurant);
    return (
        <div className={!darkMode?"bg-white":"dark:bg-slate-800"}>

            <div className="filter flex ">

                <div className="m-4 p-4 ">
                    <button className="px-4 py-2 m-4 bg-gray-500 rounded-full " onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
                </div>

               

                <div className="search m-4 p-4 ">
                <input type="text" className="border border-solid border-black focus:border-[4px] focus:border-solid focus:border-pink-300 " value={searchtext} onChange={(e)=>{
                    setsearchtext(e.target.value);  
                }} />

                
                <button className="px-4 py-2 bg-green-300 m-4 rounded-md "
                    onClick={()=>{
                    
                    const filterrestaurant=listofrestaurant.filter((res)=>{
                        return  res.info.name.toLowerCase().includes(searchtext.toLowerCase());
                    })
                    setfilteredRestaurant(filterrestaurant);
                    
                }}>Search</button> 
                </div>

                <div className="p-4 m-4">
                <button className=" px-4 py-2 bg-gray-300 m-4 rounded-md"
                onClick={()=>{
                    const filterlist=listofrestaurant.filter((res)=>{
                        return res.info.avgRating>4.1;
                    })
                    setfilteredRestaurant(filterlist);
                    // console.log("button clicked");
                }}> 
                    Top Rated Restaurant</button>
                </div>

                <div className="m-4 p-4 flex items-center">
                <label className="p-2">Username : </label>
                <input className="border border-black " onChange={(e)=>setuserinfo(e.target.value)} value={loggedInUser}></input>
                </div>
              

            </div>

            <div className="flex flex-wrap"> 
            {/* <RestaurantCard resName="Meghana Foods" cuisine="Burger,American,Vegan" rating ="4.4" time="38" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"/>
            <RestaurantCard resName="Dominos Pizza" cuisine="Italian,Spanish,Cheese" rating ="4.3" time="50" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1acb415ef4a95a8cfaf5051771f4ddfd" /> */}
           
            {/* <RestaurantCard resdata={resList[1]}/> */}
            
            {  
            filteredRestaurant.map((restaurant,index)=>{
                return <Link 
                to={"/restaurants/"+restaurant.info.id}
                key={restaurant.info.id}>
                {restaurant.info.id%2?<RestaurantCardPromoted resdata={restaurant}/>:<RestaurantCard  resdata={restaurant}/>}
                {/* <RestaurantCardPromoted  resdata={restaurant}/> */}
                </Link>
            })
        }
            
            </div>
        </div>
    )
}
export default Body;