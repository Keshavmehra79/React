import React from "react";
import {Route,Link,Routes} from "react-router-dom";
import pic from "./assets/react.svg"

import Rhome from "./Rhome";    
import Rcontact from "./Rcontact";    
import Rservice from "./Rservice";
import  Rabout from "./Rabout"
const App=()=>{
    return(
     <>
     <h1>routing</h1>
     <header>
        <img src={pic} alt="" />
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/service">Service</Link></li>
            </ul>
        </nav>
         <Routes>
           <Route path="/" element={<Rhome/>} />
           <Route path="/about" element={<Rabout/>} />
           <Route path="/service" element={<Rservice/>} />  
           <Route path="/contact" element={<Rcontact/>} />  

         </Routes>
     </header>

     </>
    )
}

export default App