import React, { useContext } from "react";
import Mycontext from "./Mycontext";
import { useState } from "react";
const CChild=()=>{
    // const Mydata=useContext(Mycontext)
    // const theme=useContext(Mycontext)
    const {obj,arr,num,theme}=useContext(Mycontext)
    const[bgcolor,func]=useState({
        dark:{
            "background-color":"white",
            "color":"black"
        }
    })
      
    return(
        <>
        <h1>Child data</h1>
        {/* <h1>My Name  is {Mydata.name} and my age is {Mydata.age}
            
             and my city is {Mydata.city}</h1> */}

    {/* <div style={theme.dark}>
        <h1>working!.........</h1>
    
    </div> */}

    <div>
        <h1>{obj.name}</h1>
        <h2>{arr[2]}</h2>
    </div>

    <h1>Sum of two number is {num.num1+num.num2}</h1>


        </>
    )
}

export default CChild