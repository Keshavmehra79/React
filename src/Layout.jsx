import React from "react";
import {Link,Outlet} from "react-router-dom";
import pic from "./assets/react.svg"

const Layout=()=>{
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    
                </ul>
            </nav>
        </header>
        {/* Componen    t will render here */}
        <Outlet/>       
{/* 
        <h1>
            Footer
        </h1> */}
        </>
    )
}

export default Layout
