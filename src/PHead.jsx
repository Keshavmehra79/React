import React from "react";
import mern from "./assets/mern.jpg"
import "./Tailwind.css";

const Head=()=>{
    return(
        <>
        <header className="flex">
            <div className="bg-gray-50 w-150 ">
              <h1 className="text-5xl m-5 p-10 text-gray-800">Hello,Guys! I am Keshav</h1>
              <p className="text-1xl m-2 text-gray-800 font-bold">Currently leraning ,mern stack in cybrom to get placement in mnc.
                After that this course i will do job ,I created many projects with the help of html,
                css and havascript.
              </p>
            </div>
            <div>
                <img src={mern} alt="" />
            </div>
        </header>
        
        </>
    )
}
export default Head