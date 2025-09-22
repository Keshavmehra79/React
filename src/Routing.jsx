import React from "react";
import {Route,Link,Routes} from "react-router-dom";

import Rhome from "./Rhome";    
import Rcontact from "./Rcontact";    
import Rservice from "./Rservice";
import  Rabout from "./Rabout"
import Layout from "./Layout";
const App=()=>{
    return(
     <>
     <h1>routing</h1>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Rhome/>}/>
        {/* <Route path="home" element={<Rhome/>}/> */}
        
        <Route path="about" element={<Rabout/>}/>
        <Route path="service" element={<Rservice/>}/>
        <Route path="contact" element={<Rcontact/>}/>
        <Route path="*" element={<h1>Error</h1>}/>

            


        </Route>

    </Routes>

     </>
    )
}

export default App