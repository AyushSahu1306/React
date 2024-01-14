import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurantmenu=()=>{

   

    const {resid}=useParams();
   // console.log(resid);

    const resinfo=useRestaurantMenu(resid);

    const [showIndex,setshowIndex]=useState(-1);

    if(resinfo===null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage}=resinfo?.cards[0]?.card?.card?.info;

    const {itemCards}=resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);

    const categories=resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        return c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    // console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold mt-6 text-2xl">{name}</h1>
            <p className="text-lg mt-2" > {cuisines.join(" ")}</p>

              {/* {categories accordian}  */}
            {categories.map((category,index)=>{
              //controlled component
              return  <RestaurantCategory 
              key={category?.card?.card?.title} 
              data={category?.card?.card} 
              showItems={index===showIndex?true:false}
              setShowIndex={()=>{
                 setshowIndex(showIndex===index?-1:index); //lifting state up react (read doc)
              }}/>
            })}
        </div>
    )
}

export default Restaurantmenu;