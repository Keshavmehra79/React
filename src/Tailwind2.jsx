import React from "react";
import pic from "./assets/react.svg";
import "./Tailwind.css";
const App2=()=>{
    return(
        <>
      <header className="flex justify-around p-2 border bg-amber-400">
        <img src={pic} alt="" />
        <nav>
           <ul className="block sm:flex gap-3 w-f" >
           <li className="hover:bg-amber-50">About</li>
           <li className="hover:bg-amber-50">Service</li>
           <li className="hover:bg-amber-50">Home</li>
           <li className="hover:bg-amber-50">Contact</li>
           <li className="hover:bg-amber-50">Registration</li>
           </ul>
        
        </nav>
        <button className="rounded-4xl bg-red-600 p-2 hover:bg-amber-900">Download</button>
      </header>
        
        </>
    )
}
export default App2