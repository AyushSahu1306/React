import React from "react";
import ReactDOM from "react-dom/client";

const root=ReactDOM.createRoot(document.getElementById("root"));

const Signup=()=>{
    return (
        <div className="flex items-center justify-center h-screen" >
            <div className=" border border-black inline-block  bg-red-50 h-52 w-72">
                <h1 className="text-2xl font-bold ">Login</h1>
                <div className="">
                    <span>Name </span>
                   <input type="email" placeholder="Enter Your Email" className="border border-solid border-black m-2"></input>
                </div>

                <div >
                    <span className="">OTP </span>
                   <input type="number" placeholder="Enter OTP" maxLength={6} className="m-4  border border-solid border-black "></input>
                </div>

            </div>
        </div>
    )
}

root.render(<Signup/>);