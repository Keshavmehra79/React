import React from "react";
import { Link,Outlet } from "react-router-dom";
const PLayout=()=>{
    return(
        <>
           <header>
                     <nav className="bg-cyan-950 h-12 text-blue-200">
                         <ul className="flex  justify-center gap-20 ">
                             <li><Link to="/">Home</Link></li>
                             <li><Link to="/head">Header</Link></li>
                             <li><Link to="/about">About</Link></li>
                             <li><Link to="/skill">Skills</Link></li>
                         </ul>
                  </nav>
                  </header>       

             <Outlet/>

             <footer className="w-full bg-gray-900 h-4   ">

        </footer>
            

        </>
    )
}

export default PLayout