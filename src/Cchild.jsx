import React, { useContext } from "react";
import Mycontext from "./Mycontext";
import { useState } from "react";
const CChild=()=>{
    const Mydata=useContext(Mycontext)
    return(
        <>
        <h1>Child data</h1>
        <h1>My Name  is {Mydata.name} and my age is {Mydata.age}
            
             and my city is {Mydata.city}</h1>
        </>
    )
}

export default CChild