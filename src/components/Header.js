import { useState,useEffect, useContext } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "../utils/Usercontext";

const Header=()=>{

    // let btnname="login";
    const [btnname,setbtnname]=useState("login");
    const onlineStatus=useOnlineStatus();

    const {loggedInUser}=useContext(Usercontext); 

    // if no dependency array => useeffect is call on every render
    // if dependency array  is empty =[] => useeffect is call on initial render(just once)
    // if dependency array contains any local state variables => it is render evry time that variable get updated
    useEffect(()=>{
        console.log("useeffect");
    },[btnname])

    const callback=()=>{
       //setbtnname(btnname==="logout"?"login":"logout");
       btnname==="logout"?setbtnname("login"):setbtnname("logout")
    }
    const offline='&#x1F534';
    return (
        <div className="flex justify-between bg-yellow-100 shadow-lg m-2 sm:bg-green-100 lg:sm:bg-pink-100">

            <div className="logo-container">
             <img src={LOGO_URL} className="w-56 h-[86px]"/>
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                  {/* Link element  The Link component renders an anchor (<a>) element under the hood. Even though you don't 
                  explicitly write the <a> tag in your JSX, React Router transforms the Link component into an anchor 
                  element during the rendering process. can check by inspect. So to apply css u can use .nav-item ul li a*/}
                    <li className="px-4"> Online Status:{onlineStatus===true?'✅':'🔴'} </li>
                    <li className="px-4"> <Link to="/" style={{textDecoration:"none"}}> Home </Link></li>
                    <li className="px-4"><Link to="/About"> About Us</Link></li>
                    <li className="px-4"><Link to="/Contact"> Contact US </Link></li>
                    <li className="px-4"> <Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={callback}>{btnname}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;