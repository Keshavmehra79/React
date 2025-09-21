import React from "react";
import portfolio from "./assets/portfolio.webp"
const  Home=()=>{
    return(
        <>
           <div className="flex bg-black text-white">
            <img src={portfolio} alt="" className="w-dvh h-150" />    
           <p className="italic m-5"><h1 className="text-5xl italic m-10">Hi' i am keshav Wellcome in my portfolio.</h1>

            I am eager learn to new things and now turning ideas into reality.
           </p>
           </div>

        </>
    )
}

export default Home