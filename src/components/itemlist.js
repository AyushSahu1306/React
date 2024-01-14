import { CDN_URL2 } from "../utils/constants";

const Itemlist = ({ items }) => {
    return (
        <div>
            {items.map((item) => {
                return (
                    <div
                        key={item.card.info.id}
                        className="p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between"
                    >
                        <div className="w-9/12">
                            <div>
                                <span className="py-2">{item.card.info.name} </span>
                                <span> - ₹ {item.card.info.price / 100} </span>
                            </div>

                            <p className="text-xs text-gray-700">
                                {item.card.info.description}
                            </p>
                        </div>
                        <div className="w-3/12 p-4 h-25">
                            <div className="absolute"> 
                                <button className="p-2 bg-black text-white shadow-lg m-auto rounded"> Add+</button>
                            </div>
                            <img src={CDN_URL2 + item.card.info.imageId} className="w-full"></img>
                                
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default Itemlist;
