import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";
import Usercontext from "./utils/Usercontext";
// import Grocery from "./components/Grocery";
/*
Header --
    logo
    Nav items
Body --
    Search Bar
    Restaurant Container
    Restaurant cards
Footer
    Copyright
    Links
    Address
    contact
*/


//chunking , code splitting , dynamic bundling, lazy loading, on demand loading , dynmamic import
const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"));


const Applayout=()=>{

    const [userinfo,setuserinfo]=useState();
    //Authentication
    useEffect(()=>{
        const data={
            name:"Ayush Sahu Ji"
        }
        setuserinfo(data.name);
    },[])


    return (
        // Only those components  will change those are wrapped in Usercontext.Provider
        <Usercontext.Provider value={{loggedInUser:userinfo,setuserinfo}}> 

        <div className="App">
        {/* <Usercontext.Provider value={{loggedInUser:"Elon Musk"}}>  */}
            <Header/>
        {/* </Usercontext.Provider> */}
            <Outlet/>
            
            
        </div>
        </Usercontext.Provider>
    )
}

const Approuter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>  
            },
            {
                path:"/About",
                element:<Suspense fallback={<h1>Loading....</h1>}>  <About/> </Suspense>
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}>  <Grocery/> </Suspense>
            },
            {
                path:"/restaurants/:resid",
                element:<Restaurantmenu/>
            }
        ],
        errorElement:<Error/>
    }
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter}/>)