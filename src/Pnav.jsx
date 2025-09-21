import React from "react";
import { Route,Link,Routes } from "react-router-dom";
import "./Tailwind.css"
import About from "./Pabout";
import Home from "./Phome";
import Head from "./PHead";
import Skill from "./Skills"
const Nav=()=>{
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
           
             <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/head" element={<Head/>}/> 
            <Route path="/skill" element={<Skill/>}/> 
            <Route path="/about" element={<About/>}/> 
            </Routes>
        </header>   
        </>)

    }

export default Nav