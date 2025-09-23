import React from "react";
import { Route,Link,Routes } from "react-router-dom";
import "./Tailwind.css"

import Home from "./Phome"
import Head from "./PHead"; 

import About from "./Pabout";
import Skill from "./Skills"
import Layout from "./Playout";

const App2=()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                
                <Route path="/head" element={<Head/>}/> 
                <Route path="/about" element={<About/>}/>
                <Route path="/skill" element={<Skill/>}/>
                <Route path="*" element={<h1>Something went Wrong!</h1>}/>


                </Route>
            </Routes>




        </>)

    }

export default App2