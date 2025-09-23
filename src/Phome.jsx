import React from "react";
import Portfolio from "./assets/portfolio.webp"
import "./Tailwind.css"
const  Home=()=>{
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
                  
                                         


        </>
    )
}

export default Home