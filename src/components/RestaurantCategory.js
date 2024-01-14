// import { useState} from "react";
import Itemlist from "./itemlist";


//controlled components (showItems)
const RestaurantCategory=({data,showItems,setShowIndex})=>{
    console.log(data);
    // const [showItems,setshowItems]=useState(false);

  const handleclick=()=>{
      setShowIndex();
  }

    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4  bg-gray-100 shadow-lg p-4">
              <div className="flex justify-between cursor-pointer" onClick={handleclick}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>^</span>
              </div>

            {showItems && <Itemlist items={data.itemCards}/>}

            </div>
            {/* Accordian Body */}
        </div>
    )
}

export default RestaurantCategory;