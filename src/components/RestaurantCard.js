import { useContext } from "react";
import Usercontext from "../utils/Usercontext";
import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    // const{image,resname,cuisine,rating,time}=props;
    const {resdata}=props;

    const {loggedInUser}=useContext(Usercontext);
    const {cloudinaryImageId,name,cuisines,avgRating}=resdata?.info;
    return (
        <div className="m-4 p-4 w-[210px] bg-gray-100 h-[410px] rounded-lg hover:bg-gray-300">
            <img 
            className=" rounded-lg h-[150px] w-full"
            alt="res-logo"
            src={CDN_URL+resdata.info.cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} &#9733;</h4>
            <h4>{resdata.info.sla.deliveryTime} minutes</h4>
            <h4>User : {loggedInUser} </h4>
        </div>
    )
}

//Higher Order Component

//input - Restaurant ==> Restaurant Card Promoted

export const withpromotedLabel=(RestaurantCard)=>{
     return (props)=>{ //returning updated component
       return ( <div>
            <label className="mx-2 p-2 absolute bg-black text-white rounded-lg">Promoted</label>
            <RestaurantCard {...props}/>
        </div>)
     }
}

export default RestaurantCard;